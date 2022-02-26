import { Server } from 'socket.io';
import { verifyTokenSocket } from './middleware/authSocketMiddleware.js';
import { newConnectionHandler } from './socketHandlers/newConnectionHandler.js';
import { disconnectHandler } from './socketHandlers/disconnectHandler.js';
import { directMessageHandler } from './socketHandlers/directMessageHandler.js';
import { setSocketServerInstance, getOnlineUsers } from './serverStore.js';

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
    });

    const emitOnlineUsers = () => {
        const onlineUsers = getOnlineUsers();
        io.emit("online-users", { onlineUsers });
    }

    io.on('connection', (socket) => {
        console.log('New client connected');
        console.log(socket.id);

        newConnectionHandler(socket, io);
        emitOnlineUsers();

        socket.on('direct-chat-history', (data) => {
            directChatHistoryHandler(socket, data);
        });

        socket.on('direct-message', (data) => {
            directMessageHandler(socket, data);
        });

        socket.on('disconnect', () => {
            disconnectHandler(socket);
            emitOnlineUsers();
        });
    });
};