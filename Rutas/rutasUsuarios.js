const express = require('express');
const { body, query } = require('express-validator')
const { crearUsuario } = require('../Controladores/controladorUsuarios')

const router = express.Router();

router.post('/guardar', crearUsuario)

module.exports = router;