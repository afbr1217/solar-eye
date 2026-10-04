import axios from 'axios';

const clientesApi = axios.create({
    baseURL: 'import.meta.env.VITE_API_URL || "https://solar-eye-backend.onrender.com"/api/clientes'
});

export default clientesApi;
