import express from 'express';
import { getGame } from '../controllers/gameController.js';

const router = express.Router();

router.get('/', getGame);
// router.post('/', postMethod);

export default router;