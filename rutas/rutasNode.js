const express = require('express');
const router = express.Router();
const path = require("path");

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../vistas/index.html"));
});
router.get('/vistas/novedades.html', (req, res) => {
    res.sendFile(path.join(__dirname, "../vistas/novedades.html"));
});
router.get('/vistas/pantallas.html', (req, res) => {
    res.sendFile(path.join(__dirname, "../vistas/pantallas.html"));
});
router.get('/vistas/teclados.html', (req, res) => {
  res.sendFile(path.join(__dirname, "../vistas/teclados.html"));
});
router.get('/vistas/mouses.html', (req, res) => {
  res.sendFile(path.join(__dirname, "../vistas/mouses.html"));
});
router.get('/vistas/audifonos.html', (req, res) => {
  res.sendFile(path.join(__dirname, "../vistas/audifonos.html"));
});
router.get('/vistas/formulario.html', (req, res) => {
  res.sendFile(path.join(__dirname, "../vistas/formulario.html"));
});
router.get('/vistas/resultado.html', (req, res) => {
  res.sendFile(path.join(__dirname, "../vistas/resultado.html"));
});
router.get('/vistas/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, "../vistas/index.html"));
});

// Ruta para mostrar el formulario
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'formulario.html'));
});

// Ruta para procesar los datos del formulario
router.post('/procesar', (req, res) => {
  const nombre = req.body.nombre;
  const email = req.body.email;
  const comentario = req.body.comentario;
 

  res.sendFile(path.join(__dirname, 'public', 'resultado.html'));
});


router.use('/publica/css', express.static(path.join(__dirname, '../publica/css'), {
    setHeaders: (res, path) => {
      if (path.endsWith('.css')) {
        res.type('text/css'); 
      }
    }
}));

router.use('/publica/js', express.static(path.join(__dirname, '../publica/js'), {
    setHeaders: (res, path) => {
      if (path.endsWith('.js')) {
        res.type('text/javascript');
      }
    }
}));

router.use('/curi', express.static(path.join(__dirname, '../publica/curi')))


module.exports = router;