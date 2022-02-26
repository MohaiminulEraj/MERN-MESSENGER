import React, { useState } from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import { sendDirectMessage } from '../../../../realtimeCommunication/socketConnection';

const MainContainer = styled.div({
    width: '100%',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

const Input = styled.input({
    backgroundColor: '#2f3136',
    width: '98%',
    height: '44px',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    padding: '0 10px',
})

const NewMessageInput = ({ chosenChatDetails }) => {
    const [message, setMessage] = useState('');

    const handleKeyPressed = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    }

    const handleSendMessage = () => {
        if (message.length > 0) {
            sendDirectMessage({
                receiverUserId: chosenChatDetails?.id,
                content: message
            })
            setMessage('');
        }
    }

    return (
        <MainContainer>
            <Input
                placeholder={`Write message to ${chosenChatDetails?.name}`}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyPressed}
            />
        </MainContainer>
    )
}

const mapStoreStateToProps = ({ chat }) => {
    return {
        ...chat,
    }
}

export default connect(mapStoreStateToProps)(NewMessageInput);