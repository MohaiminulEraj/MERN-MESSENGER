import express from 'express';
const router = express.Router()
import {
    inviteUser,
    acceptUser,
    rejectUser,
} from '../controllers/friendInvitationController.js';
import { protect } from '../middleware/authMiddleware.js';

router.route('/invite').post(protect, inviteUser);
router.route('/accept').post(protect, acceptUser);
router.route('/reject').post(protect, rejectUser);

export default router;