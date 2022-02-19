import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
});

const Label = styled.p({
    color: '#B9BBBE',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: '16px',
});

const Input = styled.input({
    flexGrow: 1,
    height: '40px',
    border: '1px solid black',
    borderRadius: '5px',
    color: '#DCDDDE',
    background: '#35393F',
    margin: 0,
    fontSize: '16px',
    padding: '0 5px',
});

const FormWithLabel = ({ value, setValue, label, type, placeholder }) => {

    return (
        <Wrapper>
            <Label>{label}</Label>
            <Input
                type={type}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={placeholder}
            />
        </Wrapper>
    )
}

export default FormWithLabel