import {
  deleteArtistModel,
  getArtistUnicoModel,
  getArtistsModel,
  postArtistaModel,
  updateArtistModel,
} from '../models/artista.model.js';

export const getAll = async (req, res) => {
  try {
    const page = req.query.page || 1;
    const pageSize = req.query.pageSize || 10;
    let data = await getArtistsModel(page, pageSize);
    res.json({ success: true, data: data, msg: 'get All' });
  } catch (error) {
    res.status(500).json({
      data: [],
      msg: 'Servicio no disponible, Por favor intente mas tarde',
      success: false,
    });
  }
};

export async function getArtista(req, res) {
  try {
    const id = req.params.id;
    let data = await getArtistUnicoModel(id);
    res.json({ success: true, data: data, msg: 'Artista Obtenido' });
  } catch {
    res.status(500).json({
      data: [],
      msg: 'Servicio no disponible, Por favor intente mas tarde',
      success: false,
    });
  }
}

export async function createArtist(req, res) {
  try {
    let { nombre, nombreArtistico, correo, contrasena, telefono, biografia } =
      req.body;
    let data = await postArtistaModel(
      nombre,
      nombreArtistico,
      correo,
      contrasena,
      telefono,
      biografia
    );
    res.json({ success: true, data: [], msg: data });
  } catch (error) {
    res.status(500).json({
      data: [],
      msg: 'Servicio no disponible, Por favor intente mas tarde',
      success: false,
    });
  }
}
export async function updateArtist(req, res) {
  try {
    const { nombre, nombreArtistico, correo, contrasena, telefono, biografia } =
      req.body;
    const id = req.params.id;
    const artistData = {
      nombre,
      nombreArtistico,
      correo,
      contrasena,
      telefono,
      biografia,
      id,
    };
    const data = await updateArtistModel(artistData);
    res.json({ success: true, data: [], msg: data });
  } catch (error) {
    res.status(500).json({
      data: [],
      msg: 'Servicio no disponible, Por favor intente mas tarde',
      success: false,
    });
  }
}
export async function deleteArtist(req, res) {
  try {
    const { id } = req.params;
    const data = await deleteArtistModel(id);
    res.json({ success: true, data: [], msg: data });
  } catch (e) {
    res.status(500).json({
      data: [],
      msg: 'Servicio no disponible, Por favor intente mas tarde',
      success: false,
    });
  }
}
