import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import SideBar from './DashboardLayout/SideBar/SideBar';
import FriendsSideBar from './DashboardLayout/FriendsSideBar/FriendsSideBar';
import Messenger from './DashboardLayout/Messenger/Messenger';
import AppBar from './DashboardLayout/AppBar/AppBar';
import Cookies from 'js-cookie';
import { logout } from '../utils/auth';
import { connect } from 'react-redux';
import { getActions } from '../../redux/actions/authActions';
import { connectWithSocketServer } from '../../realtimeCommunication/socketConnection';

const Wrapper = styled.div({
    width: '100%',
    height: '100vh',
    display: 'flex',
})

const Dashboard = ({ setUserDetails }) => {
    const userDetails = Cookies.get('user');
    useEffect(() => {
        if (!userDetails) {
            logout();
        } else {
            setUserDetails(JSON.parse(userDetails));
            connectWithSocketServer(JSON.parse(userDetails));
        }
    }, [])

    return (
        <Wrapper>
            <SideBar />
            <FriendsSideBar />
            <Messenger />
            <AppBar username={userDetails ? JSON.parse(userDetails).username : ''} />
        </Wrapper>
    )
}

const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch),
    }
};

export default connect(null, mapActionsToProps)(Dashboard);