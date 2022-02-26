import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ConversationSchema = new Schema({
    participants: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        }
    ],
    messages: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Message',
        }
    ]
});

const Conversation = mongoose.model('Conversation', ConversationSchema);

export default Conversation;