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

const router = Router();

router.get('/', getAll);
router.post('/', validate(postArtistValidator), createArtist);
router.get('/:id', getArtista);
router.put('/:id', validate(updateArtistValidator), updateArtist);
router.delete('/:id', validate(deleteArtistValidator), deleteArtist);
export default router;
