import express from 'express';
import photoRoutes from './photoRoutes.js';
import gameRoutes from './gameRoutes.js';

const router = express.Router();

router.use('/photo', photoRoutes);
router.use('/game', gameRoutes);

export default router;