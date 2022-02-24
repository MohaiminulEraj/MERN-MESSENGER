import User from '../../models/User.js';
import FriendInvitation from '../../models/FriendInvitation.js';
import { getActiveUser, getSocketServerInstance } from '../../serverStore.js';
import colors from 'colors';

const updateFriendsPendingInvitation = async (userId) => {
    try {
        const pendingInvitations = await FriendInvitation.find({
            receiverId: userId
        }).populate('senderId', '_id username email');

        // check if the user is online
        const receiverList = getActiveUser(userId);
        const io = getSocketServerInstance();

        receiverList.forEach((receiverSocketId) => {
            io.to(receiverSocketId).emit('friends-invitations', {
                pendingInvitations: pendingInvitations ? pendingInvitations : []
            });
        });
    } catch (error) {
        console.log(`${error}`.red.underline.bold);
    }
};

export {
    updateFriendsPendingInvitation
}