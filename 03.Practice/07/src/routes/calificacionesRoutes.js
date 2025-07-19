import express from 'express';
import obtenerCalificaciones from '../controllers/calificaionesController.js';

const router = express.Router();

router.get('/calificaciones', obtenerCalificaciones);

export default router;