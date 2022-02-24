import { addNewConnectedUser } from '../serverStore.js'
import { updateFriendsPendingInvitation } from './updates/friends.js';

const newConnectionHandler = async (socket, io) => {
    const userDetails = socket.user;
    addNewConnectedUser({
        socketId: socket.id,
        userId: userDetails.id,
    });

    // Update pending invitation list
    updateFriendsPendingInvitation(userDetails.id);
};

export {
    newConnectionHandler,
}