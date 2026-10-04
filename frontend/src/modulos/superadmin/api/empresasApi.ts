import axios from 'axios';

const empresasApi = axios.create({ baseURL: 'import.meta.env.VITE_API_URL || "https://solar-eye-backend.onrender.com"/api/empresas' });
export default empresasApi;
