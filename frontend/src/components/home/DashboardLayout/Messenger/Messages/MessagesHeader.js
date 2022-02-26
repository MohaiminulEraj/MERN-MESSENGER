import React from 'react';
import styled from '@emotion/styled';
import Avatar from '../../../../layout/Avatar';
import { Typography } from "@mui/material";

const MainContainer = styled.div({
    width: '98%',
    display: 'column',
    marginTop: '10px',
})

const MessagesHeader = ({ name }) => {
    return (
        <MainContainer>
            <Avatar large username={name ? name : ''} />
            <Typography
                variant="h4"
                sx={{
                    fontweight: 'bold',
                    color: "white",
                    marginLeft: "5px",
                    marginRight: "5px",
                }}>
                {name ? name : ''}
            </Typography>
            <Typography
                sx={{
                    color: "#b9bbbe",
                    marginLeft: "5px",
                    marginRight: "5px",
                }}
            >
                {name ? `Start a conversation with ${name}` : ''}
            </Typography>
        </MainContainer>
    )
}

export default MessagesHeader;