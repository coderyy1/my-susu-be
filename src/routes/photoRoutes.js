import express from 'express';
import { getPhotoList } from '../controllers/photoController.js';

const router = express.Router();

router.post('/getPhotoList', getPhotoList);
// router.post('/', postMethod);

export default router;