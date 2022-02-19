import React from 'react';
import CustomPrimaryButton from '../../layout/CustomPrimaryButton'
import RedirectInfo from '../../layout/RedirectInfo';
import { useNavigate } from 'react-router-dom';

const LoginPageFooter = ({ handleLogin, isFormValid }) => {

    const navigate = useNavigate();

    return (
        <>
            <div>
                <CustomPrimaryButton
                    label="Login"
                    onClick={handleLogin}
                    disabled={!isFormValid}
                    additionalStyles={{ marginTop: "30px" }}
                />
            </div>
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