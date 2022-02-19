import React from 'react';
import { Typography } from '@mui/material';

const LoginPageHeader = () => {
    return (
        <>
            <Typography variant="h5" gutterBottom sx={{ color: 'white', textAlign: 'center' }}>
                Welcome Back!
            </Typography>
            <Typography gutterBottom sx={{ color: '#B9BBBE', textAlign: 'center' }}>
                Sign in to continue to your account
            </Typography>
        </>
    )
}

export default LoginPageHeader