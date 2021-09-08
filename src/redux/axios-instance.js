import axios from 'axios';
const token = localStorage.getItem('token') ? localStorage.getItem('token') : undefined;

export const api = axios.create({
    baseURL: 'http://localhost:4000',
    timeout: 5000,
    headers: {
        Authorization: token,
    }
});