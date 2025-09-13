import express from 'express';
import { getGameList } from '../controllers/gameController.js';

const router = express.Router();

router.post('/getGameList', getGameList);
router.get('/getTest', async (req, res) => {res.json({code:1, msg: 'success'})})
// router.post('/', postMethod);

export default router;