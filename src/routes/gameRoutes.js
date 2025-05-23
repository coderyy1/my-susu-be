import express from 'express';
import { getGameList } from '../controllers/gameController.js';

const router = express.Router();

router.post('/getGameList', getGameList);
// router.post('/', postMethod);

export default router;