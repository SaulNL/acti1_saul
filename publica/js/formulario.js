const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware para analizar los datos del formulario
app.use(bodyParser.urlencoded({ extended: false }));

// Ruta para procesar el formulario
app.post('/enviar', (req, res) => {
  const nombre = req.body.nombre;
  const email = req.body.email;

  // Aquí puedes hacer lo que necesites con los datos, como guardarlos en una base de datos o enviarlos por correo electrónico

  // Redireccionar a otra página
  res.redirect('/otra-pagina');
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
