import store from '../../redux/store';
import { setMessages } from '../../redux/actions/chatActions';

export const updateDirectChatHistoryIfActive = (data) => {

    const { participants, messages } = data;
    // Finding id of user from token and id from active conversation
    const receiverId = store.getState().chat.chosenChatDetails?.id;
    const userId = store.getState().auth.userDetails._id;

    if (receiverId && userId) {
        const usersInConversation = [receiverId, userId];

        updateChatHistoryIfSameConversationActive({
            participants,
            usersInConversation,
            messages,
        });
    }
};

const updateChatHistoryIfSameConversationActive = ({
    participants,
    usersInConversation,
    messages,
}) => {
    const result = participants.every((participantId) => {
        return usersInConversation.includes(participantId);
    });
    if (result) {
        store.dispatch(setMessages(messages));
    }
};