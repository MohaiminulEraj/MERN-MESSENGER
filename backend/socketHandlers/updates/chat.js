import Conversation from '../../models/Conversation.js';
import asyncHandler from 'express-async-handler';
import { getSocketServerInstance, getActiveConnection } from '../../serverStore.js';

const updateChatHistory = asyncHandler(async (
    conversationId,
    toSpecifiedSocket = null
) => {
    const conversation = await Conversation.findById(conversationId).populate({
        path: 'messages',
        model: 'Message',
        populate: {
            path: 'author',
            model: 'User',
            select: 'username _id',
        },
    });
    if (conversation) {
        const io = getSocketServerInstance();

        if (toSpecifiedSocket) {
            // inital update of chat history
            return io.to(toSpecifiedSocket).emit('direct-chat-history', {
                messages: conversation.messages,
                participants: conversation.participants,
            });
        }

        conversation.participants.forEach((userId) => {
            const activeConnections = getActiveConnection(userId.toString());

            activeConnections.forEach(socketId => {
                io.to(socketId).emit('direct-chat-history', {
                    messages: conversation.messages,
                    participants: conversation.participants,
                });
            });
        });
    }
});

export {
    updateChatHistory,
}