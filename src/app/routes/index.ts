import express from 'express';
import { UserRoute } from '../modules/user.route';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/auth',
    routes: UserRoute,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
