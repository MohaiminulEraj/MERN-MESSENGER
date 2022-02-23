import { Server } from 'socket.io';

export const registerSocketServer = (server) => {

    const socketServer = new Server(server, {
        cors: {
            origin: '*',
            methods: ['GET', 'POST'],
        }
    });

    socketServer.on('connection', (socket) => {
        console.log('New client connected');
        console.log(socket.id);
        // socket.on('disconnect', () => console.log('Client disconnected'));
        // socket.on('chat message', (msg) => {
        //     console.log('Message: ' + msg);
        //     socketServer.emit('chat message', msg);
        // });
    });
};