const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  res.render('./app/not-found', {
    titulo: 'Error 404, Página no encontrada',
  });
})

module.exports = router;
