import React from 'react';
import styled from '@emotion/styled';
import FriendsListItem from './FriendsListItem';

const DUMMY_FRIENDS = [
    {
        id: 1,
        username: 'John',
        isOnline: true,
    },
    {
        id: 2,
        username: 'Alice',
        isOnline: false,
    },
    {
        id: 3,
        username: 'Bob',
        isOnline: false,
    },
]

const MainContainer = styled.div({
    flexGrow: 1,
    width: '100%',
});

const FriendsList = () => {
    return (
        <MainContainer>
            {DUMMY_FRIENDS.map((f) => (
                <FriendsListItem
                    key={f.id}
                    id={f.id}
                    username={f.username}
                    isOnline={f.isOnline}
                />
            ))}
        </MainContainer>
    )
}

export default FriendsList;