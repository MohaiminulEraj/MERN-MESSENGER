import React from 'react';
import styled from '@emotion/styled';
import WelcomeMessage from './WelcomeMessage';
import MessengerContent from './MessengerContent';
import { connect } from 'react-redux';

const MainContainer = styled.div({
    flexGrow: 1,
    backgroundColor: '#36393F',
    marginTop: '48px',
    display: 'flex',
});

const Messenger = ({ chosenChatDetails }) => {
    return (
        <MainContainer>
            {!chosenChatDetails ? (
                <WelcomeMessage />
            ) : (
                <MessengerContent chosenChatDetails={chosenChatDetails} />
            )}
        </MainContainer>
    )
};

const mapStoreStateToProps = ({ chat }) => {
    return {
        ...chat,
    }
};

export default connect(mapStoreStateToProps)(Messenger);