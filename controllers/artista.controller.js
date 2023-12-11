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
    res.json(data);
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
    let { nombre, nombreartistico, correo, contrasena, telefono, biografia } =
      req.body;
    let data = await postArtistaModel(
      nombre,
      nombreartistico,
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
    const { nombre, nombreartistico, correo, contrasena, telefono, biografia } =
      req.body;
    console.log(req.body);
    console.log(res.body);
    const id = req.params.id;
    const artistData = {
      nombre,
      nombreartistico,
      correo,
      contrasena,
      telefono,
      biografia,
      id,
    };
    const data = await updateArtistModel(artistData);
    res.json(data);
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
    res.json(data);
  } catch (e) {
    res.status(500).json({
      data: [],
      msg: 'Servicio no disponible, Por favor intente mas tarde',
      success: false,
    });
  }
}
