import React, { useState } from 'react';
import AuthBox from '../../layout/AuthBox';
import LoginPageHeader from './LoginPageHeader';
import LoginPageForms from './LoginPageForms';
import LoginPageFooter from './LoginPageFooter';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Logged In')
    }

    return (
        <AuthBox>
            <LoginPageHeader />
            <LoginPageForms
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
            />
            <LoginPageFooter isFormValid={isFormValid} handleLogin={handleLogin} />
        </AuthBox>
    )
}

export default Login