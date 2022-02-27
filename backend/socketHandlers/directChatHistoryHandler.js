import Conversation from "../models/Conversation.js";
import { updateChatHistory } from './updates/chat.js';
import asyncHandler from 'express-async-handler';

const directChatHistoryHandler = asyncHandler(async (socket, data) => {
    const userId = socket.user.id;
    const { receiverUserId } = data;

    const conversation = await Conversation.findOne({
        participants: { $all: [userId, receiverUserId] },
        type: 'DIRECT',
    });

    if (conversation) {
        updateChatHistory(conversation._id.toString(), socket.id);
    }
});

export {
    directChatHistoryHandler,
};