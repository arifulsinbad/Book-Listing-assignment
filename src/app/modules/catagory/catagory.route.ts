import express from 'express';
import { CategoryController } from './catagory.controller';

const router = express.Router();

router.post('/create-category', CategoryController.insertIntoDB);
router.get('/', CategoryController.getAllFromDB);
router.get('/:id', CategoryController.getSingleFromDB);
router.delete('/:id', CategoryController.deleteFromDB);
router.patch('/:id', CategoryController.updateIntoDB);

export const CategoryRoute = router;
