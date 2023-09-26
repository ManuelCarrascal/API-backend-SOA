import { checkSchema } from 'express-validator';

export const postArtistValidator = checkSchema(
  {
    nombre: {
      errorMessage: 'Nombre invalido',
      notEmpty: true,
      trim: true,
      isLength: {
        options: { min: 6 },
        errorMessage: 'El nombre debe tener mínimo seis caracteres',
      },
    },
    nombreArtistico: {
      errorMessage: 'Nombre Artístico invalido',
      notEmpty: true,
      trim: true,
      isLength: {
        options: { min: 3 },
        errorMessage: 'El nombre artístico debe tener mínimo tres caracteres',
      },
    },
    correo: {
      errorMessage: 'Correo invalido',
      notEmpty: true,
      trim: true,
      normalizeEmail: true,
      isEmail: {
        errorMessage: 'El correo debe ser valido',
      },
    },
    contrasena: {
      errorMessage: 'Contraseña invalida',
      notEmpty: true,
      trim: true,
      isLength: {
        options: { min: 8 },
        errorMessage: 'La contraseña debe tener mínimo ocho caracteres',
      },
    },
    telefono: {
      trim: true,
      errorMessage: 'Telefono invalido',
      notEmpty: true,
      isMobilePhone: {
        options: ['es-CO'],
        errorMessage: 'El telefono debe ser valido',
      },
    },
    generoMusical: {
      notEmpty: true,
      trim: true,
      isIn: {
        options: [
          [
            'rock',
            'pop',
            'reggaeton',
            'salsa',
            'vallenato',
            'trap',
            'reggae',
            'balada',
            'merengue',
            'cumbia',
            'bachata',
            'jazz',
            'blues',
            'metal',
            'punk',
            'country',
            'hip hop',
            'rap',
            'electronica',
            'funk',
            'disco',
            'techno',
            'house',
            'dance',
            'k-pop',
            'tropical',
            'infantil',
            'alternativo',
            'instrumental',
            'tango',
            'bolero',
            'ranchera',
            'samba',
            'flamenco',
            'gaita',
            'rumba',
          ],
        ],
        errorMessage: 'El genero musical debe ser valido',
      },
    },
    biografia: {
      trim: true,
      errorMessage: 'Biografia invalida',
      notEmpty: true,
      isLength: {
        options: { min: 10, max: 200 },
        errorMessage:
          'La biografia debe tener mínimo veinte caracteres y máximo doscientos caracteres',
      },
    },
  },
  ['body']
);

export const updateArtistValidator = checkSchema(
  {
    nombre: {
      optional: true,
      isString: true,
      trim: true,
      isLength: {
        options: { min: 1, max: 50 },
      },
      errorMessage:
        'El nombre debe ser una cadena de texto de 1 a 50 caracteres',
    },
    nombreArtistico: {
      optional: true,
      isString: true,
      trim: true,
      isLength: {
        options: { min: 1, max: 50 },
      },
      errorMessage:
        'El nombre artistico debe ser una cadena de texto de 1 a 50 caracteres',
    },
    correo: {
      optional: true,
      isEmail: true,
      trim: true,
      normalizeEmail: true,
      errorMessage: 'El correo debe ser valido',
    },
    contrasena: {
      optional: true,
      isString: true,
      trim: true,
      isLength: {
        options: { min: 8, max: 50 },
      },
      errorMessage:
        'La contraseña debe ser una cadena de texto de 8 a 20 caracteres',
    },
    telefono: {
      optional: true,
      isString: true,
      trim: true,
      errorMessage: 'El telefono debe ser valido',
    },
    generoMusical: {
      optional: true,
      isString: true,
      trim: true,
      isIn: {
        options: [
          [
            'rock',
            'pop',
            'reggaeton',
            'salsa',
            'vallenato',
            'trap',
            'reggae',
            'balada',
            'merengue',
            'cumbia',
            'bachata',
            'jazz',
            'blues',
            'metal',
            'punk',
            'country',
            'hip hop',
            'rap',
            'electronica',
            'funk',
            'disco',
            'techno',
            'house',
            'dance',
            'k-pop',
            'tropical',
            'infantil',
            'alternativo',
            'instrumental',
            'tango',
            'bolero',
            'ranchera',
            'samba',
            'flamenco',
            'gaita',
            'rumba',
          ],
        ],
        errorMessage: 'El genero musical debe ser valido',
      },
    },
    biografia: {
      optional: true,
      isString: true,
      trim: true,
      isLength: {
        options: { min: 1, max: 500 },
      },
      errorMessage:
        'La biografía debe ser una cadena de texto de 1 a 200 caracteres',
    },
  },
  ['body']
);
