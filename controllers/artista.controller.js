import {
  getArtistUnicoModel,
  getArtistsModel,
  postArtistaModel,
  updateArtistModel,
} from '../models/artista.model.js';

export const getAll = async (req, res) => {
  let data = await getArtistsModel();
  res.json({ success: true, data: data, msg: 'get All' });
};

export async function getArtista(req, res) {
  const id = req.params.id;
  let data = await getArtistUnicoModel(id);
  res.json({ success: true, data: data, msg: 'Artista Obtenido' });
}

export async function createArtist(req, res) {
  let {
    nombre,
    nombreArtistico,
    correo,
    contrasena,
    telefono,
    generoMusical,
    biografia,
  } = req.body;
  let data = await postArtistaModel(
    nombre,
    nombreArtistico,
    correo,
    contrasena,
    telefono,
    generoMusical,
    biografia
  );
  res.json({ success: true, data: [], msg: data });
}

export async function updateArtist(req, res) {
  let {
    nombre,
    nombreArtistico,
    correo,
    contrasena,
    telefono,
    generoMusical,
    biografia,
  } = req.body;
  let id = req.params.id;
  let data = await updateArtistModel(
    nombre,
    nombreArtistico,
    correo,
    contrasena,
    telefono,
    generoMusical,
    biografia,
    id
  );
  res.json({ success: true, data: [], msg: data });
}
