

/***************************************************************************/
/**********************    JONATHAN VERA SEGURA  **************************/
/************************* 21/11/2025  ***********************************/

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Ruta GET /
app.get('/', (req, res) => {
    res.json({ "mensaje": "Bienvenido al servicio web" });
});

// Ruta GET /saludo
app.get('/saludo', (req, res) => {
    res.json({ "saludo": "Hola desde Node.js nativo" });
});

// Ruta GET /edad
app.get('/edad', (req, res) => {
    const { nombre, anio } = req.query;
    
    if (!nombre || !anio) {
        return res.status(400).json({ "error": "Faltan parámetros" });
    }
    
    const anioActual = new Date().getFullYear();
    const edadAprox = anioActual - parseInt(anio);
    
    res.json({
        "nombre": nombre,
        "anio_nacimiento": parseInt(anio),
        "edad_aprox": edadAprox
    });
});

// Ruta GET /hora
app.get('/hora', (req, res) => {
    const hora = new Date().toTimeString().split(' ')[0];
    res.json({ "hora": hora });
});

// Ruta no encontrada
app.use((req, res) => {
    res.status(404).json({ "error": "Ruta no encontrada" });
});

app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});