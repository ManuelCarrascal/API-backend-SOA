import pgService from '../services/pg.service.js';

export const getArtistsModel = async () => {
  const pg = new pgService();
  const query = 'SELECT * FROM artista';
  const result = await pg.connection.query(query);
  return result;
};

export const getArtistUnicoModel = async (id) => {
  const pg = new pgService();
  const query = `SELECT * FROM artista WHERE id = $1`;
  const result = await pg.connection.query(query, [id]);
  return result;
};

export const postArtistaModel = async (
  nombre,
  nombreArtistico,
  correo,
  contrasena,
  telefono,
  generoMusical,
  biografia
) => {
  try {
    const pg = new pgService();
    const query = `INSERT INTO ARTISTA 
    (nombre_real,nombre_artistico,correo,contrasena,telefono,genero_musical,biografia)  
    VALUES 
    ($1, $2, $3, $4, $5, $6, $7)
    `;
    await pg.connection.none(query, [
      nombre,
      nombreArtistico,
      correo,
      contrasena,
      telefono,
      generoMusical,
      biografia,
    ]);
    return 'Artista creado exitosamente';
  } catch (error) {
    if (error.code === '23505') {
      return 'El correo ya está registrado';
    }
    return 'Error al crear el artista';
  }
};

export const updateArtistModel = async (
  nombre,
  nombreArtistico,
  correo,
  contrasena,
  telefono,
  generoMusical,
  biografia,
  id
) => {
  try {
    const pg = new pgService();
    const query = `UPDATE ARTISTA SET
    nombre_real = $1,
    nombre_artistico = $2,
    correo = $3,
    contrasena = $4,
    telefono = $5,
    genero_musical = $6,
    biografia = $7
    WHERE id = $8
    `;
    await pg.connection.none(query, [
      nombre,
      nombreArtistico,
      correo,
      contrasena,
      telefono,
      generoMusical,
      biografia,
      id,
    ]);
    return 'Artista actualizado exitosamente';
  } catch (error) {
    if (error.code === '23502') {
      return 'No ingresaste un dato obligatorio';
    }
  }
};
