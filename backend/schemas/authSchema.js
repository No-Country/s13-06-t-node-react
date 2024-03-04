const z = require('zod');

// {
//     "email": "user@example",
//     "password": "123456",
// }

const loginSchema = z.object({
  email: z
    .string({
      required_error: 'Email Requerido',
      invalid_type_error: 'Email debe ser de tipo String'
    })
    .email({
      message: 'Email inválido'
    }),
  password: z.string({
    required_error: 'Contraseña Requerida',
    invalid_type_error: 'Contraseña debe ser de tipo String'
  })
});

// {
//     "email": "user@example",
//     "password": "123456",
//     "firstName": "User",
//     "lastName": "Example",
//     "dni": "12345678"
// }

const registerSchema = z.object({
  email: z
    .string({
      required_error: 'Email Requerido',
      invalid_type_error: 'Email debe ser de tipo String'
    })
    .email({
      message: 'Email inválido'
    }),
  password: z
    .string({
      required_error: 'Contraseña Requerida',
      invalid_type_error: 'Contraseña debe ser de tipo String'
    })
    .min(6, { message: 'La contraseña debe tener al menos 6 caracteres' }),
  firstName: z.string({
    required_error: 'Nombre Requerido',
    invalid_type_error: 'Nombre debe ser de tipo String'
  }),
  lastName: z.string({
    required_error: 'Apellido Requerido',
    invalid_type_error: 'Apellido debe ser de tipo String'
  }),
  dni: z
    .string({
      required_error: 'DNI Requerido',
      invalid_type_error: 'DNI debe ser de tipo String'
    })
    .min(7, { message: 'DNI inválido' })
    .max(15, { message: 'DNI inválido' })
});

module.exports = {
  loginSchema,
  registerSchema
};
