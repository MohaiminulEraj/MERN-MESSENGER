import express from 'express';
const router = express.Router()
import {
    loginUser,
    registerUser
} from '../controllers/authController.js';
// import { protect } from '../middleware/authMiddleware.js';

router.route('/').post(registerUser);
router.post('/login', loginUser);

export default router