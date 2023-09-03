import express from 'express';
import { BookController } from './book.controller';
const router = express.Router();
router.post('/create-book', BookController.insertIntoDB);
router.get('/', BookController.getAllFromDB);
router.delete('/:id', BookController.deleteFromDB);
router.patch('/:id', BookController.updateIntoDB);
router.get('/:id', BookController.getSingleFromDB);

export const BookRoute = router;
