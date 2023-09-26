import { Router } from 'express';
import Artista from './artista.routes.js';
import Auth from './auth.routes.js';

const router = Router();

const generalRouters = [
  { path: '/auth', route: Auth },
  { path: '/api/artistas', route: Artista },
];

generalRouters.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
