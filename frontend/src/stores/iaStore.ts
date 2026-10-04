import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';

const API_URL = import.meta.env.VITE_API_URL || 'https://solar-eye-backend.onrender.com';

const iaApi = axios.create({
  baseURL: `${API_URL}/api/ia`
});

export const useIaStore = defineStore('ia', () => {
    const disponible = ref(false);
    const cargado = ref(false);

    const cargarDisponibilidad = async () => {
        try {
            const { data } = await iaApi.get('/disponible');
            disponible.value = Boolean(data?.disponible);
        } catch {
            disponible.value = false;
        } finally {
            cargado.value = true;
        }
    };

    return {
        disponible,
        cargado,
        cargarDisponibilidad
    };
});