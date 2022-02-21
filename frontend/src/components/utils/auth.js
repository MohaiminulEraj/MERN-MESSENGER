import Cookies from 'js-cookie';

export const logout = () => {
    Cookies.remove('user');
    window.location.pathname = "/login";
};
