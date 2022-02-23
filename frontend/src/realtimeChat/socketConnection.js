import io from 'socket.io-client';

let socket = null;

export const connectWithSocketServer = () => {

    socket = io.connect('http://localhost:5000');

    socket.on('connect', () => {
        console.log('Connected to socket server');
        console.log(socket.id);
        // socket.emit('join', userDetails);
    });
};