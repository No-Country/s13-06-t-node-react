const z = require('zod');

//   {
//     "routeId": 3,
//     "day": 'MON',
//     "departureTime": '18:00:00',
//     "cost": 53000,
//     "vehicleId": 8
//   }

const timeRegex = /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/;
const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
// Definir restricciones y tipo para cada uno de los elementos del objeto
const routeSchema = z.object({
  routeId: z
    .number({
      required_error: 'Id de Ruta Requerido',
      invalid_type_error: 'Tipo ID Inválido, debe ser tipo INTEGER.'
    })
    .int('Id debe ser un entero')
    .positive('Id debe ser positivo'),
  day: z.enum(days),
  departureTime: z
    .string({
      required_error: 'hora de salida Requerida',
      invalid_type_error:
        "Hora de salida debe ser de tipo String con formato 'HH:MM:SS'"
    })
    .regex(timeRegex, {
      message: "Formato inválido, use 'HH:MM:SS'."
    }),
  cost: z
    .number({
      required_error: 'Costo Requerido',
      invalid_type_error: 'Costo debe ser de tipo numérico Decimal'
    })
    .positive('Costo debe ser positivo'),
  vehicleId: z
    .number({
      required_error: 'Id de Ruta Requerido',
      invalid_type_error: 'Tipo ID Inválido, debe ser tipo INTEGER.'
    })
    .int('Id debe ser un entero')
    .positive('Id debe ser positivo')
});
// TEST SCHEMA
// const newSchedule = {
//   "routeId": 3,
//   "day": 'WED',
//   "departureTime": '18:00:00',
//   "cost": 53000,
//   "vehicleId": 8
// }

// const result = routeSchema.safeParse(newSchedule)
// console.log(result.error)

module.exports = {
  routeSchema
};
