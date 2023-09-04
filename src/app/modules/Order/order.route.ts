import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { OrderController } from './order.controller';

const router = express.Router();
router.post(
  '/create-order',
  auth(ENUM_USER_ROLE.CUSTOMER),
  OrderController.insertIntoDB
);
router.get('/', auth(ENUM_USER_ROLE.ADMIN), OrderController.getAllFromDB);
router.get(
  '/order',
  auth(ENUM_USER_ROLE.CUSTOMER),
  OrderController.getAllCustomer
);
router.get(
  '/:id',
  auth(ENUM_USER_ROLE.CUSTOMER, ENUM_USER_ROLE.ADMIN),
  OrderController.getSingleFromDB
);

export const OrderRoute = router;
