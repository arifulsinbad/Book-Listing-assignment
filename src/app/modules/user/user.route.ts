import express from 'express';
import { UserController } from './user.controller';

const router = express.Router();

router.post('/signup', UserController.insertIntoDB);
router.get('/', UserController.getAllFromDB);
router.get('/:id', UserController.getSingleFromDB);
router.delete('/:id', UserController.deleteFromDB);
router.patch('/:id', UserController.updateIntoDB);

export const UserRoute = router;
