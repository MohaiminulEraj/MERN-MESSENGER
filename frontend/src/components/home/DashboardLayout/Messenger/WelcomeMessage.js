import React from 'react';
import styled from '@emotion/styled';
import { Typography } from "@mui/material";

const Wrapper = styled.div({
    flexGrow: 1,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

const WelcomeMessage = () => {
    return (
        <Wrapper>
            <Typography variant="h6" sx={{ color: "white" }}>
                To start a conversation, click on a contact
            </Typography>
        </Wrapper>
    )
}

export default WelcomeMessage;