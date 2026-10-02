import express from 'express';
import cors from 'cors';

import usuariosRutas from './routes/usuariosRutas.js';
import clientesRutas from './routes/clientesRutas.js';
import simulacionesRutas from './routes/simulacionesRutas.js';
import reportesRutas from './routes/reportesRutas.js';
import nasaRutas from './routes/nasaRutas.js';
import citasRutas from './routes/citasRutas.js';
import inventarioRutas from './routes/inventarioRutas.js';
import IaRutas from './routes/IaRutas.js'; 
import empresasRutas from './routes/empresasRutas.js';
import catalogoRutas from './routes/catalogoRutas.js';
import pdfRutas from './routes/pdfRutas.js';

const app = express();

// Configuración explícita de CORS
app.use(cors({
  origin: [
    'https://solar-eye-taupe.vercel.app',
    'http://localhost:5173',
    'http://localhost:3000'
  ],
  credentials: true
}));

// --- AJUSTE CRÍTICO PARA SOLAREYE ---
// Aumentamos el límite a 10MB para soportar las fotos de los recibos
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Ruta raíz para Keep-Alive (Cron-Job)
app.get('/', (_req, res) => {
  res.status(200).json({ status: 'ok', mensaje: 'Solar Eye Backend Activo' });
});

// Rutas de la IA (Chat y Visión)
app.use('/api/ia', IaRutas);

// Resto de tus rutas
app.use('/api/usuarios', usuariosRutas);
app.use('/api/clientes', clientesRutas);
app.use('/api/simulaciones', simulacionesRutas);
app.use('/api/reportes', reportesRutas);
app.use('/api/nasa', nasaRutas);
app.use('/api/empresas', empresasRutas);
app.use('/api/citas', citasRutas);
app.use('/api/inventario', inventarioRutas);
app.use('/api/catalogo', catalogoRutas);
app.use('/api/pdf', pdfRutas);

const PUERTO = process.env.PORT || 3001;

app.listen(PUERTO, () => {
    console.log(`Servidor en ejecución en el puerto ${PUERTO}`);
});

export default app;