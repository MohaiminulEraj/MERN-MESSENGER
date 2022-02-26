import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    content: { type: String },
    date: { type: Date },
    type: { type: String },
});

const Message = mongoose.model('Message', MessageSchema);

export default Message;