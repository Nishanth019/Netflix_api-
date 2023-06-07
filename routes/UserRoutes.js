
import express from 'express';
import { addToLikedMovies, getLikedMovies, removeFromLikedMovies } from '../controllers/UserControllers.js';
const router = express.Router();

router.get("/liked/:email", getLikedMovies);
router.post('/add',addToLikedMovies);
router.put('/remove', removeFromLikedMovies)

export default router;