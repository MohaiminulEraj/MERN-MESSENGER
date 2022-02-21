import React from 'react';
import CustomPrimaryButton from '../../layout/CustomPrimaryButton'
import RedirectInfo from '../../layout/RedirectInfo';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';

const RegisterPageFooter = ({ handleRegister, isFormValid }) => {

    const navigate = useNavigate();

    const getFormNotValidMsg = () => {
        return "Please enter a valid Email, Username and Password. The Username should be between 3 to 12 characters and the Password should be between 6 to 12 characters.";
    }

    return (
        <>
            <Tooltip
                title={!isFormValid ? getFormNotValidMsg() : 'Press to Register!'}
            >
                <div>
                    <CustomPrimaryButton
                        label="Register"
                        onClick={handleRegister}
                        disabled={!isFormValid}
                        additionalStyles={{ marginTop: "30px" }}
                    />
                </div>
            </Tooltip>
            <RedirectInfo
                text="Already have an account? "
                redirectText="Login"
                additionalStyles={{ marginTop: "5px" }}
                redirectHandler={() => navigate('/login')}
            />
        </>
    )
}

export default RegisterPageFooter;