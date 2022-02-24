import User from '../../models/User.js';
import FriendInvitation from '../../models/FriendInvitation.js';
import { getActiveConnection, getSocketServerInstance } from '../../serverStore.js';
import colors from 'colors';

const updateFriendsPendingInvitation = async (userId) => {
    try {
        const pendingInvitations = await FriendInvitation.find({
            receiverId: userId
        }).populate('senderId', '_id username email');

        // check if the user is online
        const receiverList = getActiveConnection(userId);
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

const updateFriends = async (userId) => {
    try {
        // find all the users that are online
        const receiverList = getActiveConnection(userId);

        if (receiverList.length > 0) {
            const user = await User.findById(userId, { _id: 1, friends: 1 }).populate(
                'friends',
                '_id username email'
            );
            if (user) {
                const friendsList = user.friends.map((f) => {
                    return {
                        id: f._id,
                        email: f.email,
                        username: f.username,
                    };
                });

                // get io server instance
                const io = getSocketServerInstance();

                receiverList.forEach((receiverSocketId) => {
                    io.to(receiverSocketId).emit('friends-list', {
                        friends: friendsList ? friendsList : [],
                    })
                })
            }
        }

    } catch (error) {
        console.log(`${error}`.red.underline.bold);
    }
};

export {
    updateFriendsPendingInvitation,
    updateFriends
}