import pgService from '../services/pg.service.js';

export const getArtistsModel = async (page, pageSize) => {
  const pg = new pgService();
  const offset = (page - 1) * pageSize;
  const query = `SELECT * FROM artista LIMIT $1 OFFSET $2`;
  const result = await pg.connection.query(query, [pageSize, offset]);
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
  nombreartistico,
  correo,
  contrasena,
  telefono,
  biografia
) => {
  try {
    const pg = new pgService();
    const existingArtistQuery = `SELECT * FROM artista WHERE correo = $1`;
    const existingArtist = await pg.connection.oneOrNone(existingArtistQuery, [
      correo,
    ]);

    if (existingArtist) {
      throw new Error('El correo ya está registrado');
    }

    const query = `INSERT INTO artista 
    (nombre,nombreartistico,correo,contrasena,telefono,biografia)  
    VALUES 
    ($1, $2, $3, $4, $5, $6)
    `;
    await pg.connection.none(query, [
      nombre,
      nombreartistico,
      correo,
      contrasena,
      telefono,
      biografia,
    ]);
    return 'Artista creado exitosamente';
  } catch (error) {
    if (error.message === 'El correo ya está registrado') {
      return error.message;
    }
    return 'Error al crear el artista';
  }
};

export const updateArtistModel = async (artistData) => {
  const {
    nombre,
    nombreartistico,
    correo,
    contrasena,
    telefono,
    biografia,
    id,
  } = artistData;
  try {
    const pg = new pgService();
    const query = `UPDATE ARTISTA SET
    nombre = $1,
    nombreartistico = $2,
    correo = $3,
    contrasena = $4,
    telefono = $5,
    biografia = $6
    WHERE id = $7
    `;
    const result = await pg.connection.result(
      `SELECT COUNT(*) FROM ARTISTA WHERE id = $1`,
      [id]
    );
    if (result.rows[0].count === '0') {
      return 'El artista no se pudo encontrar';
    }
    await pg.connection.none(query, [
      nombre,
      nombreartistico,
      correo,
      contrasena,
      telefono,
      biografia,
      id,
    ]);
    return 'Artista actualizado exitosamente';
  } catch (error) {
    if (error.code === '23502') {
      return 'No ingresaste un dato obligatorio';
    } else {
      throw new Error('Error al actualizar el artista');
    }
  }
};

export const deleteArtistModel = async (id) => {
  try {
    const pg = new pgService();
    const result = await pg.connection.result(
      `SELECT COUNT(*) FROM ARTISTA WHERE id = $1`,
      [id]
    );
    if (result.rows[0].count === '0') {
      return 'El artista no se pudo encontrar';
    }
    const query = 'DELETE from artista WHERE id = $1';
    await pg.connection.none(query, [id]);
    return 'Eliminado con exito el artista';
  } catch (error) {
    throw new Error('Error al eliminar el artista');
  }
};

export const findArtistByEmail = async (correo) => {
  const pg = new pgService();
  const query = 'SELECT * FROM artista WHERE correo = $1';
  const result = await pg.connection.oneOrNone(query, [correo]);
  return result;
};
