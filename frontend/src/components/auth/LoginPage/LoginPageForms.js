import React from 'react';
import FormWithLabel from '../../layout/FormWithLabel';

const LoginPageForms = ({ email, setEmail, password, setPassword }) => {
    return (
        <>
            <FormWithLabel
                value={email}
                setValue={setEmail}
                label="Email"
                type="email"
                placeholder="Enter your email address"
            />
            <FormWithLabel
                value={password}
                setValue={setPassword}
                label="Password"
                type="password"
                placeholder="Enter password"
            />
        </>
    )
}

export default LoginPageForms