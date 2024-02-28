const z = require('zod');

// {
//     "originId": 3,
//     "destinationId": 2,
//     "duration": "09:15:00",
//     "distance": "700.00",
//     "price": "68900.00"
// }

const timeRegex = /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/;
// Definir restricciones y tipo para cada uno de los elementos del objeto
const routeSchema = z.object({
  originId: z
    .number({
      required_error: 'Id de Origen Requerido',
      invalid_type_error: 'Tipo ID Inválido'
    })
    .int('Id debe ser un entero')
    .positive('Id debe ser positivo'),
  destinationId: z
    .number({
      required_error: 'Id Destino Requerido',
      invalid_type_error: 'Tipo ID Inválido'
    })
    .int('Id debe ser un entero')
    .positive('Id debe ser positivo'),
  duration: z
    .string({
      required_error: 'Duración Requerida',
      invalid_type_error:
        "Duración debe ser de tipo String con formato 'HH:MM:SS'"
    })
    .regex(timeRegex, {
      message: "Formato inválido, use 'HH:MM:SS'."
    }),
  distance: z.number({
    required_error: 'Distancia Requerida',
    invalid_type_error: 'Distancia debe ser de tipo numérico (Decimal)'
  }),
  price: z.number({
    required_error: 'Precio Requerido',
    invalid_type_error: 'Precio debe ser de tipo numérico (Decimal)'
  })
});

module.exports = {
  routeSchema
};