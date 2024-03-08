const z = require('zod');

/* {
   "number": 48,
   "plate": "pqrs84",
   "totalSeats": 40,
   "amenities": [1, 3, 5]
 } */

const vehicleSchema = z.object({
  number: z
    .number({
      required_error: 'El número del vehículo es requerido',
      invalid_type_error: 'El número del vehículo debe ser de tipo numérico'
    })
    .int('El número del vehículo debe ser un entero')
    .positive('El número del vehículo debe ser positivo'),
  plate: z
    .string({
      required_error: 'La placa del vehículo es requerida',
      invalid_type_error:
        'La placa del vehículo debe ser de tipo string en minusculas'
    })
    .min(6, 'La placa del vehículo debe tener al menos 6 caracteres')
    .max(8, 'La placa del vehículo no puede tener más de 8 caracteres'),
  totalSeats: z
    .number({
      required_error: 'El número total de asientos es requerido',
      invalid_type_error:
        'El número total de asientos debe ser de tipo numérico'
    })
    .int('El número total de asientos debe ser un entero')
    .positive('El número total de asientos debe ser positivo'),
  amenities: z.array(
    z
      .number({
        required_error: 'Los amenities son requeridos',
        invalid_type_error:
          'Los amenities deben ser números enteros que hagan referencia al ID del Amenity'
      })
      .int('Los amenities deben ser números enteros')
      .positive('Los amenities deben ser números positivos')
  )
});

module.exports = {
  vehicleSchema
};
