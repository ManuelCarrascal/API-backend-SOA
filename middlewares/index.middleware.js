import { verifyToken } from './token.middleware.js';
import { Router } from 'express';

const router = Router();

router.use('/api/artistas', verifyToken);

export default router;
