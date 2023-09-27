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

/* **
* Código en JavaScript para facilitar la interacción entre una aplicación web y un sistema de análisis de datos:
*
* Supongamos que estamos construyendo una aplicación web que recopila datos de usuarios y queremos enviar esos datos a un servidor de análisis. Aquí hay un ejemplo de un controlador de servidor en Node.js.
*
* En este ejemplo:
* 
* - Usamos Node.js y Express para crear un servidor web.
* - Utilizamos el middleware `body-parser` para analizar las solicitudes JSON.
* - Tenemos una ruta `/api/user-data` que recibe datos de usuario enviados desde la aplicación web.
* - Luego, llamamos a `analyticsService.sendUserData(userData)` para enviar esos datos al servicio de análisis.
*
* Este es solo un ejemplo básico, pero muestra cómo se puede escribir código que permite la interacción entre una aplicación web y un sistema de análisis de datos. El código sería más complejo en aplicaciones del mundo real, pero la claridad, la modularidad y la facilidad de mantenimiento son aspectos clave que se esperarían de un buen código producido en el contexto de la ciencia de datos.
** */