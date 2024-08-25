import express from 'express';
import { uploadImage } from '../controllers/uploadController.js';
import upload from '../middlewares/uploadMiddleware.js';

const router = express.Router();

// POST route for uploading an image
router.post('/', upload.single('image'), uploadImage);

export default router;
