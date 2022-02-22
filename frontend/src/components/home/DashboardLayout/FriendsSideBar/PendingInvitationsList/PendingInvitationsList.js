import React from 'react';
import styled from '@emotion/styled';
import PendingInvitationsListItem from './PendingInvitationsListItem';

const DUMMY_INVITATION = [
    {
        _id: '1',
        senderId: {
            username: 'Tony',
            email: 'tony@example.com',
        }
    },
    {
        _id: '2',
        senderId: {
            username: 'Stank',
            email: 'stank@example.com',
        }
    }
]

const MainContainer = styled.div({
    width: '100%',
    height: '22%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'auto',
})

const PendingInvitationsList = () => {
    return (
        <MainContainer>
            {DUMMY_INVITATION.map((invitation) => (
                <PendingInvitationsListItem
                    key={invitation._id}
                    id={invitation._id}
                    username={invitation.senderId.username}
                    email={invitation.senderId.email}
                />
            ))}
        </MainContainer>
    )
}

export default PendingInvitationsList;