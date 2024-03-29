const connectedUsers = new Map();

let io = null;

const setSocketServerInstance = (ioInstance) => {
    io = ioInstance;
};

const getSocketServerInstance = () => {
    return io;
};

const addNewConnectedUser = ({ socketId, userId }) => {
    connectedUsers.set(socketId, { userId });
    console.log('New connected user!');
    // console.log(connectedUsers);
};

const removeConnectedUser = (socketId) => {
    if (connectedUsers.has(socketId)) {
        connectedUsers.delete(socketId);
        console.log('User disconnected!');
        console.log(connectedUsers);
    }
};

const getActiveConnection = (userId) => {
    const activeConnections = [];
    connectedUsers.forEach((value, key) => {
        if (value.userId === userId) {
            activeConnections.push(key);
        }
    })

    return activeConnections;
};

const getOnlineUsers = () => {
    const onlineUsers = [];
    connectedUsers.forEach((value, key) => {
        onlineUsers.push({ socketId: key, userId: value.userId });
    })

    return onlineUsers;
}

export {
    addNewConnectedUser,
    removeConnectedUser,
    getActiveConnection,
    setSocketServerInstance,
    getSocketServerInstance,
    getOnlineUsers
}