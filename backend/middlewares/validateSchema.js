//Función de verificación para POST, valida todos los atributos.
const validateSchema = (schema) => (req, res, next) => {
    try {
      const result = schema.safeParse(req.body);
      if (!result.success) {
        throw new Error(result.error);
      }
  
      next();
    } catch (err) {
      return res.status(400).send(JSON.parse(err.message));
    }
  };
  //Función de verificación para PUT/PATCH, valida parcialmente los atributos.
  const validatePartialSchema = (schema) => (req, res, next) => {
    try {
      const result = schema.partial().safeParse(req.body);
      if (!result.success) {
        throw new Error(result.error);
      }
  
      next();
    } catch (err) {
      return res.status(400).send(JSON.parse(err.message));
    }
  };
  
  module.exports = {
    validateSchema,
    validatePartialSchema
  };