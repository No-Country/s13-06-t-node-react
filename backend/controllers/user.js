const bcrypt = require('bcrypt');
const UserService = require('../services/user');
const { catchAsync } = require('../helpers/catchAsync');
const { endpointResponse } = require('../helpers/success');
const { ErrorObject } = require('../helpers/error');

module.exports = {
  getAll: catchAsync(async (req, res) => {
    try {
      // Tratamos de obtener todos los usuarios
      const users = await UserService.getAll();

      // Si no se pudieron obtener los usuarios, lanzamos un error
      if (!users) {
        throw new ErrorObject('No se pudieron obtener los usuarios!', 500);
      }

      // Si se pudieron obtener los usuarios, enviamos la respuesta
      endpointResponse({
        res,
        status: 'success',
        message: 'Usuarios obtenidos con éxito!',
        body: { users: users }
      });
    } catch (error) {
      // Si hubo un error, lo capturamos y lo lanzamos
      endpointResponse({
        res,
        status: error.status || 'error',
        code: error.statusCode || 500,
        message: error.message || 'Error al obtener los usuarios!'
      });
    }
  }),

  getByEmail: catchAsync(async (req, res) => {
    try {
      // Obtenemos el email del usuario desde los parámetros
      const { email } = req.params;

      // Tratamos de obtener el usuario por su email
      const user = await UserService.getByEmail(email);

      // Si no se pudo obtener el usuario, lanzamos un error
      if (!user) {
        throw new ErrorObject(
          `No se encontró ningún usuario con el email: ${email}!`,
          404
        );
      }

      // Si se pudo obtener el usuario, enviamos la respuesta
      endpointResponse({
        res,
        status: 'success',
        message: 'Usuario obtenido con éxito!',
        body: user
      });
    } catch (error) {
      // Si hubo un error, lo capturamos y lo lanzamos
      endpointResponse({
        res,
        status: error.status || 'error',
        code: error.statusCode || 500,
        message: error.message || 'Error al obtener el usuario!'
      });
    }
  }),

  getById: catchAsync(async (req, res) => {
    try {
      const { id } = req.params;
      const user = await UserService.getById(id);

      if (!user) {
        throw new ErrorObject(
          `No se encontró ningún usuario con el ID: ${id}`,
          404
        );
      }

      endpointResponse({
        res,
        status: 'success',
        message: 'Usuario obtenido con éxito!',
        body: user
      });
    } catch (error) {
      endpointResponse({
        res,
        status: error.status || 'error',
        code: error.statusCode || 500,
        message: error.message || 'Error al obtener el usuario!'
      });
    }
  }),

  create: catchAsync(async (req, res) => {
    try {
      // Obtenemos los datos del usuario desde el body
      const { dni, firstName, lastName, email, password } = req.body;

      // Verificamos que el usuario no exista
      const existingUser = await UserService.getByEmail(email);

      // Si el usuario ya existe, lanzamos un error
      if (existingUser) {
        throw new ErrorObject('El usuario ya existe!', 409);
      }

      // Hasheamos la contraseña
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = {
        dni,
        firstName,
        lastName,
        email,
        password: hashedPassword
      };

      // Creamos el usuario
      const newUser = await UserService.create(user);

      // Si no se pudo crear el usuario, lanzamos un error
      if (!newUser) {
        throw new Error('No se pudo registrar el usuario!');
      }

      // Si se pudo crear el usuario, enviamos la respuesta
      endpointResponse({
        res,
        code: 201,
        message: 'Usuario registrado con éxito!',
        body: newUser
      });
    } catch (error) {
      // Si hubo un error, lo capturamos y lo lanzamos
      endpointResponse({
        res,
        status: error.status || 'error',
        code: error.statusCode || 500,
        message: error.message || 'No se pudo registrar el usuario!'
      });
    }
  }),

  update: catchAsync(async (req, res) => {
    try {
      const { id } = req.params;
      const user = req.body;

      // Si el usuario intenta cambiar la contraseña, la hasheamos
      if (user.password) {
        user.password = await bcrypt.hash(user.password, 10);
      }

      // Actualizamos el usuario
      const updatedUser = await UserService.update(id, user);

      // Si no se pudo actualizar el usuario, lanzamos un error
      if (!updatedUser) {
        throw new ErrorObject('No se pudo actualizar el usuario!', 500);
      }

      // Si se pudo actualizar el usuario, enviamos la respuesta
      endpointResponse({
        res,
        status: 'success',
        message: 'Usuario actualizado con éxito!',
        body: updatedUser
      });
    } catch (error) {
      // Si hubo un error, lo capturamos y lo lanzamos
      endpointResponse({
        res,
        status: error.status || 'error',
        code: error.statusCode || 500,
        message: error.message || 'Error al actualizar el usuario!'
      });
    }
  }),

  remove: catchAsync(async (req, res) => {
    try {
      const { id } = req.params;
      await UserService.remove(id);

      // Si se pudo eliminar el usuario, enviamos la respuesta
      endpointResponse({
        res,
        status: 'success',
        message: 'Usuario eliminado con éxito!'
      });
    } catch (error) {
      // Si hubo un error, lo capturamos y lo lanzamos
      endpointResponse({
        res,
        code: 500,
        message: 'Error al eliminar el usuario!'
      });
    }
  })
};
