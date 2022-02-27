import Message from "../models/Message.js";
import Conversation from "../models/Conversation.js";
import { updateChatHistory } from './updates/chat.js';

const directMessageHandler = async (socket, data) => {
    try {
        console.log('direct msg evnt handler!')
        const userId = socket.user.id;
        const { receiverUserId, content } = data;

        // create new message
        const message = await Message.create({
            content: content,
            author: userId,
            date: new Date(),
            type: 'DIRECT',
        });

        // find if conversation exists between sender and receiver - if not, create
        const conversation = await Conversation.findOne({
            participants: { $all: [userId, receiverUserId] },
        });

        if (conversation) {
            conversation.messages.push(message._id);
            await conversation.save();

            updateChatHistory(conversation._id.toString());
        } else {
            const newConversation = await Conversation.create({
                messages: [message._id],
                participants: [userId, receiverUserId],
            });

            updateChatHistory(newConversation._id.toString());
        }


    } catch (error) {
        console.log(`${error}`.red.underline.bold)
    }
};

export {
    directMessageHandler,
}
