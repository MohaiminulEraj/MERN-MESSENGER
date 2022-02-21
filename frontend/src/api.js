import axios from 'axios';
import Cookies from 'js-cookie';
import { logout } from './components/utils/auth';

const apiClient = axios.create({
    baseUrl: 'http://localhost:5000',
    timeout: 1000,
})

apiClient.interceptors.request.use((config) => {
    const userDetails = Cookies.get('user');
    if (userDetails) {
        const token = JSON.parse(userDetails).token;
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

// Public routes

export const login = async (data) => {
    try {
        return await apiClient.post('/api/auth/login', data);
        // return await axios.post('/api/auth/login', data);
    } catch (exception) {
        return {
            error: true,
            exception
        };
    }
}

export const register = async (data) => {
    try {
        return await apiClient.post('/api/auth/register', data);
        // return await axios.post(`/api/auth/register`, data);
    } catch (exception) {
        return {
            error: true,
            exception
        };
    }
}

// Protected routes

const checkResponse = (exception) => {
    const responseCode = exception?.response?.status;

    if (responseCode) {
        (responseCode === 401 || responseCode === 403) && logout();
    }
}
