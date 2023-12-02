import { Router } from 'express';
import { login } from '../controllers/auth.controller.js';
import { usuarioValidator } from '../validators/usuario.validator.js';
import { validate } from '../middlewares/validator.middleware.js';
const router = Router();

router.get('/', validate(usuarioValidator), login);

export default router;
