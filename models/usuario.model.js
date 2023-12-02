import pgService from '../services/pg.service.js';

export const getUser = async (correo, contrasena) => {
  const pg = new pgService();
  const query = 'SELECT * FROM artista where correo = $1 and contrasena = $2';
  const result = await pg.connection.oneOrNone(query, [correo, contrasena]);
  return result;
};
