import React from 'react';
import CustomPrimaryButton from '../../layout/CustomPrimaryButton'
import RedirectInfo from '../../layout/RedirectInfo';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';

const LoginPageFooter = ({ handleLogin, isFormValid }) => {

    const navigate = useNavigate();

    const getFormNotValidMsg = () => {
        return "Enter Correct Email and Password. The Password should contains between 6 and 12 characters.";
    }

    return (
        <>
            <Tooltip
                title={!isFormValid ? getFormNotValidMsg() : 'Press to Login!'}
            >
                <div>
                    <CustomPrimaryButton
                        label="Login"
                        onClick={handleLogin}
                        disabled={!isFormValid}
                        additionalStyles={{ marginTop: "30px" }}
                    />
                </div>
            </Tooltip>
            <RedirectInfo
                text="Don't have an account? "
                redirectText="Sign Up"
                additionalStyles={{ marginTop: "5px" }}
                redirectHandler={() => navigate('/register')}
            />
        </>
    )
}

export default LoginPageFooter;