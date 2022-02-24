import asyncHandler from 'express-async-handler';
import User from '../models/User.js';
import FriendInvitation from '../models/FriendInvitation.js';
import { updateFriendsPendingInvitation, updateFriends } from '../socketHandlers/updates/friends.js';

const inviteUser = asyncHandler(async (req, res) => {
    const { targetedEmail } = req.body;
    const { email } = req.user;
    const userId = req.user.id;

    if (email.toLowerCase() === targetedEmail.toLowerCase()) {
        res.status(400)
        throw new Error('You cannot invite yourself!')
    }

    const targetUser = await User.findOne({ email: targetedEmail.toLowerCase() });

    if (!targetUser) {
        res.status(404)
        throw new Error('User not found!')
    }

    // Check if the invitation has already been sent
    const invitationAlreadyReceived = await FriendInvitation.findOne({
        senderId: userId,
        receiverId: targetUser._id,
    })

    if (invitationAlreadyReceived) {
        res.status(409)
        throw new Error('Invitation already sent!')
    }
    // if the user already my friend
    const userAlreadyFriends = targetUser.friends.find(
        (friendId) => friendId.toString() === userId.toString()
    );

    if (userAlreadyFriends) {
        res.status(409)
        throw new Error('User already your friend!')
    }

    // Create a new invitation in the database
    const newInvitation = await FriendInvitation.create({
        senderId: userId,
        receiverId: targetUser._id,
    });

    // If invitation has already been created then update friends invitations if other users is online

    // send pending invitation update to specific user
    updateFriendsPendingInvitation(targetUser._id.toString());

    return res.status(201).send('Invitation sent!');
});

const acceptUser = asyncHandler(async (req, res) => {
    const { id } = req.body;
    const invitation = await FriendInvitation.findById(id);
    if (!invitation) {
        res.status(401);
        throw new Error('Error Occured. Please try again!');
    }

    const { senderId, receiverId } = invitation;

    // add friends to both users
    const senderUser = await User.findById(senderId);
    senderUser.friends = [...senderUser.friends, receiverId];


    const receiverUser = await User.findById(receiverId);
    receiverUser.friends = [...receiverUser.friends, senderId];

    await senderUser.save();
    await receiverUser.save();

    // delete invitation
    await FriendInvitation.findByIdAndDelete(id);


    // update friends list of the user if the user is online
    updateFriends(senderId.toString());
    updateFriends(receiverId.toString());

    // update list of friends pending invitation
    updateFriendsPendingInvitation(receiverId.toString());

    return res.status(200).send('Friend added!');

});

const rejectUser = asyncHandler(async (req, res) => {
    const { id } = req.body;
    const userId = req.user.id;

    // remove invitation from friendInvitation collection
    const invitationExists = await FriendInvitation.exists({ _id: id });

    if (invitationExists) {
        await FriendInvitation.findByIdAndDelete(id);
    }
    // update pending invitations
    updateFriendsPendingInvitation(userId);
    return res.status(200).send('Invitation rejected!');
});

export {
    inviteUser,
    acceptUser,
    rejectUser,
}