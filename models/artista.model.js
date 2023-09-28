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

export const updateArtistModel = async (artistData) => {
  const {
    nombre,
    nombreArtistico,
    correo,
    contrasena,
    telefono,
    generoMusical,
    biografia,
    id,
  } = artistData;
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
    const result = await pg.connection.result(
      `SELECT COUNT(*) FROM ARTISTA WHERE id = $1`,
      [id]
    );
    if (result.rows[0].count === '0') {
      return 'El artista no se pudo encontrar';
    }
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
