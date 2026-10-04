import axios from 'axios';

const catalogoApi = axios.create({ 
    baseURL: 'import.meta.env.VITE_API_URL || "https://solar-eye-backend.onrender.com"/api/catalogo' 
});

export default catalogoApi;
