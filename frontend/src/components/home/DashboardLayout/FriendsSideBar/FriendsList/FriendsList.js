import React from 'react';
import styled from '@emotion/styled';
import FriendsListItem from './FriendsListItem';
import { connect } from 'react-redux';

const MainContainer = styled.div({
    flexGrow: 1,
    width: '100%',
});

const checkUsers = (friends = [], onlineUsers = []) => {
    friends.forEach((f) => {
        const isUserOnline = onlineUsers.find((user) => user.userId === f.id);
        f.isOnline = isUserOnline ? true : false;
    })
    return friends;
}

const FriendsList = ({ friends, onlineUsers }) => {
    return (
        <MainContainer>
            {checkUsers(friends, onlineUsers).map((f) => (
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

const mapStoreStateToProps = ({ friends }) => {
    return {
        ...friends,
    }
};

export default connect(mapStoreStateToProps)(FriendsList);