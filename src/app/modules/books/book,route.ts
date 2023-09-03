import express from 'express';
import { BookController } from './book.controller';
const router = express.Router();
router.post('/', BookController.insertIntoDB);

export const BookRoute = router;
