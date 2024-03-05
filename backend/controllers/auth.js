const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserService = require('../services/user');
const AuthService = require('../services/auth');
const { catchAsync } = require('../helpers/catchAsync');
const { endpointResponse } = require('../helpers/success');
const { secretOrKey } = require('../config/keys');
const { ErrorObject } = require('../helpers/error');

module.exports = {
  register: catchAsync(async (req, res) => {
    try {
      // Obtenemos los datos del usuario desde el cuerpo de la petición
      const user = req.body;

      // Verificamos si el usuario ya existe
      const existingUser = await UserService.getByEmail(user.email);

      // Si el usuario ya existe, lanzamos un error
      if (existingUser) {
        throw new ErrorObject('El usuario ya existe.', 409);
      }

      // Tratamos de crear el usuario
      const newUser = await UserService.create(user);

      // Si no se pudo crear el usuario, lanzamos un error
      if (!newUser) {
        throw new ErrorObject('No se pudo crear el usuario.', 500);
      }

      // Eliminamos la contraseña del usuario
      newUser.password = undefined;

      // Si se pudo crear el usuario, enviamos la respuesta
      endpointResponse({
        res,
        status: 'success',
        message: 'Usuario creado con éxito!',
        body: { user: newUser }
      });
    } catch (error) {
      // Si hubo un error, lo capturamos y lo lanzamos
      endpointResponse({
        res,
        status: error.status || 'error',
        code: error.statusCode || 500,
        message: error.message || 'No se pudo registrar el usuario.'
      });
    }
  }),

  login: catchAsync(async (req, res) => {
    try {
      // Obtenemos el email y la contraseña del usuario desde el cuerpo de la petición
      const { email, password } = req.body;

      // Tratamos de obtener el usuario por su email
      const user = await AuthService.getUser(email);

      // Si no se pudo obtener el usuario, lanzamos un error
      if (!user) {
        throw new ErrorObject('Usuario o contraseña incorrecta.', 401);
      }

      // Comparamos la contraseña del usuario con la contraseña ingresada
      const isMatch = await bcrypt.compare(password, user.password);

      // Si las contraseñas no coinciden, lanzamos un error
      if (!isMatch) {
        throw new ErrorObject('Usuario o contraseña incorrecta.', 401);
      }

      const payload = {
        sub: user.id,
        role: user.role
      };
      const token = jwt.sign(payload, secretOrKey, { expiresIn: '24h' });

      // Eliminamos la contraseña del usuario
      user.password = undefined;

      // Si las contraseñas coinciden, enviamos la respuesta
      endpointResponse({
        res,
        status: 'success',
        message: 'Usuario autenticado con éxito!',
        body: { user, token }
      });
    } catch (error) {
      // Si hubo un error, lo capturamos y lo lanzamos
      endpointResponse({
        res,
        status: error.status || 'error',
        code: error.statusCode || 500,
        message: error.message || 'No se pudo autenticar el usuario.'
      });
    }
  }),

  // login with google route
  google: catchAsync(async (req, res) => {
    try {
      const { token } = req.body;
      const decode = jwt.decode(token);
      const user = await AuthService.getUser(decode.email);
      if (user) {
        const token = jwt.sign({ sub: user.id, role: user.role }, secretOrKey, {
          expiresIn: '24h'
        });
        endpointResponse({
          res,
          status: 'success',
          message: 'Usuario autenticado con éxito!',
          body: { user, token }
        });
      } else {
        const newUser = await UserService.create({
          email: decode.email,
          firstName: decode.given_name,
          lastName: decode.family_name
        });
        const token = jwt.sign(
          { sub: newUser.id, role: newUser.role },
          secretOrKey,
          {
            expiresIn: '24h'
          }
        );
        endpointResponse({
          res,
          status: 'success',
          message: 'Usuario autenticado con éxito!',
          body: { user: newUser, token }
        });
      }
    } catch (error) {
      endpointResponse({
        res,
        status: error.status || 'error',
        code: error.statusCode || 500,
        message: error.message || 'No se pudo autenticar el usuario.'
      });
    }
  })
};
