import { checkSchema } from 'express-validator';

export const usuarioValidator = checkSchema(
  {
    correo: {
      errorMessage: 'Correo inválido',
      notEmpty: true,
      isEmail: true,
      errorMessage:
        'El correo debe ser una dirección de correo electrónico válida',
    },
    contrasena: {
      errorMessage: 'Contraseña inválida',
      notEmpty: true,
      isLength: {
        options: { min: 8 },
        errorMessage: 'La contraseña debe tener mínimo 8 caracteres',
      },
    },
  },
  ['body']
);
