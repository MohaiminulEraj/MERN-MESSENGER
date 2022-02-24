import React, { useState } from 'react';
import { Tooltip, Typography, Box } from '@mui/material';
import Avatar from '../../../../layout/Avatar';
import InvitationDecisionButtons from './InvitationDecisionButtons';
import { connect } from 'react-redux';
import { getActions } from '../../../../../redux/actions/friendsActions';

const PendingInvitationsListItem = ({
    id,
    email,
    username,
    acceptFriendInvitation = () => { },
    rejectFriendInvitation = () => { },
}) => {

    const [buttonDisabled, setButtonDisabled] = useState(false);

    const handleAcceptInvitation = () => {
        acceptFriendInvitation({ id });
        setButtonDisabled(true);
    }

    const handleRejectInvitation = () => {
        rejectFriendInvitation({ id });
        setButtonDisabled(true);
    }

    return (
        <Tooltip title={email}>
            <div style={{ width: '100%' }}>
                <Box
                    sx={{
                        width: '100%',
                        height: '42px',
                        marginTop: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Avatar username={username} />
                    <Typography
                        sx={{
                            marginLeft: '7px',
                            fontWeight: 700,
                            color: '#8e9297',
                            flexGrow: 1,
                        }}
                        variant='subtitle1'
                    >
                        {username}
                    </Typography>
                    <InvitationDecisionButtons
                        disabled={buttonDisabled}
                        onAccept={handleAcceptInvitation}
                        onReject={handleRejectInvitation}
                    />
                </Box>
            </div>
        </Tooltip>
    )
}

const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch)
    }
}

export default connect(null, mapActionsToProps)(PendingInvitationsListItem);