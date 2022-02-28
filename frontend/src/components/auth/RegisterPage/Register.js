import React, { useState, useEffect } from 'react';
import AuthBox from '../../layout/AuthBox';
import { Typography } from '@mui/material';
import RegisterPageForms from './RegisterPageForms';
import RegisterPageFooter from './RegisterPageFooter';
import { validateRegisterForm } from '../../utils/validator';
import { connect } from 'react-redux';
import { getActions } from '../../../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';

const Register = ({ register }) => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    // const ipLookUp = async () => {
    //     const res = await axios.get('http://ip-api.com/json');
    //     setCountry(res?.data?.country);
    //     setCity(res?.data?.city);
    //     setPublicIP(res?.data?.query);
    //     setTimezone(res?.data?.timezone);
    //     setISP(res?.data?.isp);
    // }

    const handleRegister = () => {
        const userDetails = {
            email,
            username,
            password,
        };
        register(userDetails, navigate);
    }

    useEffect(() => {
        setIsFormValid(validateRegisterForm({ email, username, password }));
    }, [email, username, password, setIsFormValid]);

    return (
        <AuthBox>
            <Typography variant="h5" sx={{ color: 'white' }} gutterBottom>
                Create an account
            </Typography>
            <RegisterPageForms
                email={email}
                setEmail={setEmail}
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
            />
            <RegisterPageFooter
                handleRegister={handleRegister}
                isFormValid={isFormValid}
            />
        </AuthBox>
    )
};

const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch),
    }
};

export default connect(null, mapActionsToProps)(Register);