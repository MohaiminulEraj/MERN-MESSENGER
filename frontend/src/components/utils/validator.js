export const validateLoginForm = ({ email, password }) => {
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    return isEmailValid && isPasswordValid;
};

export const validateRegisterForm = ({ email, username, password }) => {
    const isEmailValid = validateEmail(email);
    const isUsernameValid = validateUsername(username);
    const isPasswordValid = validatePassword(password);

    return isEmailValid && isUsernameValid && isPasswordValid;
};

const validateEmail = (email) => {
    if (email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i))
        return true;
    return false;
};

const validateUsername = (username) => {
    if (username.length >= 3 && username.length <= 12)
        return true;
    return false;
}

const validatePassword = (password) => {
    if (password.length >= 6 && password.length <= 12)
        return true;
    return false;
};