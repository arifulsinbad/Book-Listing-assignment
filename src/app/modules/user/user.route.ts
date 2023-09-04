import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { UserController } from './user.controller';

const router = express.Router();

router.post('/signup', UserController.insertIntoDB);
router.get('/', auth(ENUM_USER_ROLE.ADMIN), UserController.getAllFromDB);
router.get('/:id', auth(ENUM_USER_ROLE.ADMIN), UserController.getSingleFromDB);
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), UserController.deleteFromDB);
router.patch('/:id', auth(ENUM_USER_ROLE.ADMIN), UserController.updateIntoDB);

export const UserRoute = router;
