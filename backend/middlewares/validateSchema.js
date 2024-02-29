const { ErrorObject } = require('../helpers/error');
const { endpointResponse } = require('../helpers/success');

//Función de verificación para POST, valida todos los atributos.
const validateSchema = (schema) => (req, res, next) => {
  try {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      throw new ErrorObject(result.error);
    }

    next();
  } catch (err) {
    endpointResponse({
      res,
      status: 'fail',
      code: 400,
      message: 'Error de validación',
      body: { errors: JSON.parse(err.message) }
    });
  }
};
//Función de verificación para PUT/PATCH, valida parcialmente los atributos.
const validatePartialSchema = (schema) => (req, res, next) => {
  try {
    const result = schema.partial().safeParse(req.body);
    if (!result.success) {
      throw new ErrorObject(result.error);
    }

    next();
  } catch (err) {
    endpointResponse({
      res,
      status: 'fail',
      code: 400,
      message: 'Error de validación',
      body: { errors: JSON.parse(err.message) }
    });
  }
};

module.exports = {
  validateSchema,
  validatePartialSchema
};
