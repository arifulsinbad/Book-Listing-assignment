import express from 'express';
import { BookController } from './book.controller';
const router = express.Router();
router.post('/create-book', BookController.insertIntoDB);
router.get('/', BookController.getAllFromDB);

export const BookRoute = router;
