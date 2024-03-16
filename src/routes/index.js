const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  res.render('./app', {
    titulo: 'Landing page',
  });
})

module.exports = router;
