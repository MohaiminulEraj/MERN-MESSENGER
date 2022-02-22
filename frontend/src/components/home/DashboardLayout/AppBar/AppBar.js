import React from 'react';
import styled from '@emotion/styled';
import DropDownMenu from './DropDownMenu';

const MainContainer = styled.div({
    position: 'absolute',
    right: "0",
    top: "0",
    height: "48px",
    borderBottom: "1px solid black",
    backgroundColor: "#36393F",
    width: "calc(100% - 326px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 15px",
});

const AppBar = () => {
    return (
        <MainContainer>
            <DropDownMenu />
        </MainContainer>
    )
}

export default AppBar;