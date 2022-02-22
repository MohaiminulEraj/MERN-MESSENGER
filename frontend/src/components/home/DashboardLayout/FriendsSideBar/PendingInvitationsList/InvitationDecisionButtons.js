import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { Box, IconButton } from '@mui/material';

const InvitationDecisionButtons = ({ disabled, onAccept, onReject }) => {
    return (
        <Box>
            <IconButton
                style={{ color: 'white' }}
                disabled={disabled}
                onClick={onAccept}
            >
                <CheckIcon />
            </IconButton>
            <IconButton
                style={{ color: 'white' }}
                disabled={disabled}
                onClick={onReject}
            >
                <ClearIcon />
            </IconButton>
        </Box>
    )
}

export default InvitationDecisionButtons;