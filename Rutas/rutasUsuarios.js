const express = require('express');
const { body, query } = require('express-validator')
const { crearUsario } = require('../Controladores/controladorUsuarios')

const router = express.Router();

router.post('/guardar', crearUsario)

module.exports = router;