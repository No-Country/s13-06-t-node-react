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
  })
});

module.exports = {
  loginSchema,
  registerSchema
};
