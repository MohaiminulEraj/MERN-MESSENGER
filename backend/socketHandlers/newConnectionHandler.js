import { addNewConnectedUser } from '../serverStore.js'
import { updateFriendsPendingInvitation, updateFriends } from './updates/friends.js';

const newConnectionHandler = async (socket, io) => {
    const userDetails = socket.user;
    addNewConnectedUser({
        socketId: socket.id,
        userId: userDetails.id,
    });

    // Update pending invitation list
    updateFriendsPendingInvitation(userDetails.id);

    // Update friends list
    updateFriends(userDetails.id);
};

export {
    newConnectionHandler,
}