import axios from 'axios';

const citasApi = axios.create({
    baseURL: 'import.meta.env.VITE_API_URL || "https://solar-eye-backend.onrender.com"/api/citas'
});

export default citasApi;
