const express = require('express');
const router = express.Router();

router.get('/formulario', async (req, res) => {
  res.render('./app/contact', {
    titulo: 'Formulario de contacto',
  });
})

module.exports = router;
