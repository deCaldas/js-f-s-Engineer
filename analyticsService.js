function sendUserData(userData) {
    // Aquí, en lugar de enviar datos a un servicio real, los registramos en la consola
    console.log('Datos de usuario recibidos:');
    console.log(userData);
  }
  
  module.exports = {
    sendUserData,
  };

/* ** 
* Este archivo `analyticsService.js` debería contener la lógica para enviar los datos del usuario a un servicio de análisis. Dado que este es un archivo simulado de ejemplo, podemos crear una función simple para representar esta acción.
*
* Aquí hay una implementación de ejemplo para `analyticsService.js` que simplemente registra los datos del usuario en la consola.
*
* En este ejemplo:
*
* - Hemos definido una función `sendUserData` que toma los datos del usuario como argumento.
* - Dentro de la función, simplemente registramos los datos del usuario en la consola utilizando `console.log()`.
* - Exportamos la función `sendUserData` para que pueda ser utilizada en otros archivos, como `server.js`.

* Recuerda que en una aplicación real, `analyticsService.js` contendría la lógica para enviar los datos del usuario a un servicio de análisis externo, como una API de análisis. En esta implementación de ejemplo, hemos simulado esta acción simplemente registrando los datos en la consola para que puedas ver cómo se llama la función `sendUserData` en `server.js`.
*
* Con esta implementación en `analyticsService.js`, cuando realices una solicitud POST desde `server.js`, los datos del usuario se registrarán en la consola como parte del proceso de simulación. 
** */