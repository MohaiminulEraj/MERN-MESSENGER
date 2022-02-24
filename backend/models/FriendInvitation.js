import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const FriendInvitationSchema = new Schema({
    senderId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    receiverId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
});

const FriendInvitation = mongoose.model('FriendInvitation', FriendInvitationSchema);

export default FriendInvitation;