import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import Messages from './Messages/Messages';
import NewMessageInput from './NewMessageInput';

const Wrapper = styled.div({
    flexGrow: 1,
})


const MessengerContent = ({ chosenChatDetails }) => {
    useEffect(() => {
        // window.scrollTo(0, document.body.scrollHeight);
    }, [chosenChatDetails]);
    return (
        <Wrapper>
            <Messages />
            <NewMessageInput />
        </Wrapper>
    )
}

export default MessengerContent;