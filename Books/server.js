const express = require('express');
const path = require('path');
const app = express();
const routes = require('./app/routes');  // Importa las rutas desde routes.js

const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Usar las rutas definidas en routes.js
routes(app);  // Asegúrate de que estás pasando 'app' a la función 'routes'

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
