const connectedUsers = new Map();

let io = null;

const setSocketServerInstance = (ioInstance) => {
    io = ioInstance;
}

const getSocketServerInstance = () => {
    return io;
}

const addNewConnectedUser = ({ socketId, userId }) => {
    connectedUsers.set(socketId, { userId });
    console.log('New connected user!');
    // console.log(connectedUsers);
}

const removeConnectedUser = (socketId) => {
    if (connectedUsers.has(socketId)) {
        connectedUsers.delete(socketId);
        console.log('User disconnected!');
        console.log(connectedUsers);
    }
}

const getActiveUser = (userId) => {
    const activeUsers = [];
    connectedUsers.forEach((value, key) => {
        if (value.userId === userId) {
            activeUsers.push(key);
        }
    })

    return activeUsers;
}

export {
    addNewConnectedUser,
    removeConnectedUser,
    getActiveUser,
    setSocketServerInstance,
    getSocketServerInstance
}