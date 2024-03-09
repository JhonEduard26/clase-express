const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  res.render('./app/not-found', {
    titulo: 'Error 404, Pagina no encontrada',
  });
})

module.exports = router;
