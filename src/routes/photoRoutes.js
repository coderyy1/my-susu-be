import express from 'express';
import { getPhoto } from '../controllers/photoController.js';

const router = express.Router();

router.get('/', getPhoto);
// router.post('/', postMethod);

export default router;