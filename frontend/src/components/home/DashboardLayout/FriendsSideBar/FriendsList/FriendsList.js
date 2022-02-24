import React from 'react';
import styled from '@emotion/styled';
import FriendsListItem from './FriendsListItem';
import { connect } from 'react-redux';

const MainContainer = styled.div({
    flexGrow: 1,
    width: '100%',
});

const FriendsList = ({ friends }) => {
    return (
        <MainContainer>
            {friends.map((f) => (
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