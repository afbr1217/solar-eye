import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'https://solar-eye-backend.onrender.com';

const simulacionesApi = axios.create({
    baseURL: `${API_URL}/api/simulaciones`
});

export const nasaApi = axios.create({
    baseURL: `${API_URL}/api/nasa`
});

const iaApi = axios.create({
    baseURL: `${API_URL}/api/ia`
});

export const analizarReciboConIA = async (imagenBase64: string) => {
    try {
        const { data } = await iaApi.post('/analizar-recibo', { imagen: imagenBase64 });
        return data;
    } catch (error) {
        console.error("Error al conectar con el servicio de visión:", error);
        throw error;
    }
};

export default simulacionesApi;