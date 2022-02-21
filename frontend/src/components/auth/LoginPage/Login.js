import React, { useState, useEffect } from 'react';
import AuthBox from '../../layout/AuthBox';
import LoginPageHeader from './LoginPageHeader';
import LoginPageForms from './LoginPageForms';
import LoginPageFooter from './LoginPageFooter';
import { validateLoginForm } from '../../utils/validator';
import { connect } from 'react-redux';
import { getActions } from '../../../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';

const Login = ({ login }) => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        setIsFormValid(validateLoginForm({ email, password }));
    }, [email, password, setIsFormValid]);

    const handleLogin = () => {
        const userDetails = {
            email,
            password
        };
        login(userDetails, navigate);
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
};

const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch),
    }
}

export default connect(null, mapActionsToProps)(Login);