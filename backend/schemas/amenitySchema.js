const z = require('zod');

const amenitySchema = z.object({
  name: z
    .string({
      required_error: 'El nombre del amenity(servicio) es requerido',
      invalid_type_error:
        'El nombre del amenity(servicio) debe ser de tipo string'
    })
    .min(2, 'El nombre del amenity(servicio) no puede estar vacío')
    .max(
      60,
      'El nombre del amenity(servicio) no puede exceder los 255 caracteres'
    )
});

module.exports = {
  amenitySchema
};
