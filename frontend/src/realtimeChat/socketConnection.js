import io from 'socket.io-client';
import { setPendingFriendsInvitations } from '../redux/actions/friendsActions';
import store from '../redux/store';

let socket = null;

export const connectWithSocketServer = (userDetails) => {

    const jwtToken = userDetails.token;

    socket = io.connect('http://localhost:5000', {
        auth: {
            token: jwtToken,
        },
    });

    socket.on('connect', () => {
        console.log('Connected to socket server');
        console.log(socket.id);
        // socket.emit('join', userDetails);
    });

    socket.on('friends-invitations', (data) => {
        const { pendingInvitations } = data;
        store.dispatch(setPendingFriendsInvitations(pendingInvitations));
    });
};