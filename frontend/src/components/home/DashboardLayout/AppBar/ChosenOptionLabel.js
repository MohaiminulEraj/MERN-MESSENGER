import React from 'react';
import { Typography } from '@mui/material';
import { connect } from 'react-redux';

const ChosenOptionLabel = ({ name, me }) => {
    return (
        <Typography
            sx={{
                color: 'white',
                fontSize: '16px',
                fontWeight: 'bold',
            }}
        >
            {name ? `Chating With: ${name}!` : `Hi ${me}!`}
        </Typography>
    )
};

const mapStoreStateToProps = (state) => {
    return {
        name: state.chat.chosenChatDetails?.name,
    }
};

export default connect(mapStoreStateToProps)(ChosenOptionLabel);