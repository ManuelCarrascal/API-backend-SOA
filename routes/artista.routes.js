import { Router } from 'express';
import {
  getAll,
  getArtista,
  createArtist,
  updateArtist,
  deleteArtist,
} from '../controllers/artista.controller.js';
import { validate } from '../middlewares/validator.middleware.js';
import {
  deleteArtistValidator,
  postArtistValidator,
  updateArtistValidator,
} from '../validators/artista.validator.js';
import { verifyToken } from '../middlewares/token.middleware.js';

const router = Router();
// Ruta de registro pública
router.post('/', validate(postArtistValidator), createArtist);

// Rutas que requieren autenticación
router.use(verifyToken);
router.get('/', getAll);
router.get('/:id', getArtista);
router.put('/:id', validate(updateArtistValidator), updateArtist);
router.delete('/:id', validate(deleteArtistValidator), deleteArtist);
export default router;
