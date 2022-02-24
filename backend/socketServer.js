import { Server } from 'socket.io';
import { verifyTokenSocket } from './middleware/authSocketMiddleware.js';
import { newConnectionHandler } from './socketHandlers/newConnectionHandler.js';
import { disconnectHandler } from './socketHandlers/disconnectHandler.js';
import { setSocketServerInstance } from './serverStore.js';

export const registerSocketServer = (server) => {

    const io = new Server(server, {
        cors: {
            origin: '*',
            methods: ['GET', 'POST'],
        }
    });

    setSocketServerInstance(io);

    io.use((socket, next) => {
        verifyTokenSocket(socket, next);
    })

    io.on('connection', (socket) => {
        console.log('New client connected');
        console.log(socket.id);

        newConnectionHandler(socket, io);

        socket.on('disconnect', () => {
            disconnectHandler(socket);
        });
        // socket.on('chat message', (msg) => {
        //     console.log('Message: ' + msg);
        //     io.emit('chat message', msg);
        // });
    });
};