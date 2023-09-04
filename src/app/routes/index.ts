import express from 'express';
import { AuthRoute } from '../modules/Auth/auth.route';
import { MyProfileRoute } from '../modules/MyProfile/myProfile.route';
import { OrderRoute } from '../modules/Order/order.route';
import { BookRoute } from '../modules/books/book,route';
import { CategoryRoute } from '../modules/catagory/catagory.route';
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
    routes: CategoryRoute,
  },
  {
    path: '/books',
    routes: BookRoute,
  },
  {
    path: '/orders',
    routes: OrderRoute,
  },
  {
    path: '/',
    routes: OrderRoute,
  },
  {
    path: '/profile',
    routes: MyProfileRoute,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
