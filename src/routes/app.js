const express = require('express');
const pool = require('../db/db');
const router = express.Router();
const { hashPassword } = require('../utils/password')

router.get('/login', async (req, res) => {
  res.render('./app/login', {
    titulo: 'Inicio de sesión',
  });
})

router.post('/registro', async (req, res) => {
  const {
    nombre,
    apellido,
    correo,
    password,
    rol,
    estado
  } = req.body;

  const passwordHash = await hashPassword(password);
  console.log(passwordHash);
})

module.exports = router;
