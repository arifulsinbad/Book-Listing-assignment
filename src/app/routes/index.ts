import express from 'express';
import { AuthRoute } from '../modules/Auth/auth.route';
import { UserRoute } from '../modules/user/user.route';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/auth',
    routes: UserRoute,
  },
  {
    path: '/users',
    routes: UserRoute,
  },
  {
    path: '/auth',
    routes: AuthRoute,
  },
  {
    path: '/categories',
    routes: AuthRoute,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
