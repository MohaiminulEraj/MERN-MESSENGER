import React from 'react';
import FormWithLabel from '../../layout/FormWithLabel';

const RegisterPageForms = ({ email, setEmail, username, setUsername, password, setPassword }) => {
    return (
        <>
            <FormWithLabel
                value={email}
                setValue={setEmail}
                label="Email"
                type="email"
                placeholder="Enter email address"
                required
            />
            <FormWithLabel
                value={username}
                setValue={setUsername}
                label="Username"
                type="text"
                placeholder="Enter username"
                required
            />
            <FormWithLabel
                value={password}
                setValue={setPassword}
                label="Password"
                type="password"
                placeholder="Enter password"
                required
            />
        </>
    )
}

export default RegisterPageForms;