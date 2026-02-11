import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:5000'
});

api.interceptors.request.use((req) => {
    const token = localStorage.getItem('token');
    if (token) {
        req.headers.Authorization = token;
    }
    return req;
});

export default api;