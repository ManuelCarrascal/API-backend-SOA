import { checkSchema } from  'express-validator';

export const usuarioValidator = checkSchema({
    usuario: {
      errorMessage: 'Usuario invalido',
      notEmpty: true,
      isLength: {
        options: { min: 3 },
        errorMessage: 'El Usuario debe tener minimo 3 caracteres',
      },
    },
    contrasena: {
        errorMessage: 'contraseña invalido',
        notEmpty: true,
        isLength: {
          options: { min: 8 },
          errorMessage: 'La contraseña debe tener minimo 8 caracteres',
        },
    }
} ,['query']);
