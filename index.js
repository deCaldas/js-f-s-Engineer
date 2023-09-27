const express = require('express');
const bodyParser = require('body-parser');
const analyticsService = require('./analyticsService');

const app = express();
const port = 3000;

// Middleware para analizar solicitudes JSON
app.use(bodyParser.json());

// Ruta para recibir datos de usuario desde la aplicación web
app.post('/api/user-data', (req, res) => {
  const userData = req.body;

  // Enviar datos al servicio de análisis
  analyticsService.sendUserData(userData);

  res.status(200).send('Datos de usuario recibidos con éxito.');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
