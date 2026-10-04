import axios from 'axios';

const inventarioApi = axios.create({ baseURL: 'import.meta.env.VITE_API_URL || "https://solar-eye-backend.onrender.com"/api/inventario' });
export default inventarioApi;
