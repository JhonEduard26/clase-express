const express = require('express');
const router = express.Router();

router.get('/login', async (req, res) => {
  res.render('./app/login', {
    titulo: 'Inicio de sesión',
  });
})

module.exports = router;
