import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'https://solar-eye-backend.onrender.com';

const clientesApi = axios.create({
  baseURL: `${API_URL}/api/clientes`
});

export default clientesApi;