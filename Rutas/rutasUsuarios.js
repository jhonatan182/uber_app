const express = require('express');
const { body, query } = require('express-validator')
const { crearUsuario, eliminarUsuario } = require('../Controladores/controladorUsuarios')

const router = express.Router();

router.post('/guardar', crearUsuario)
router.delete('eliminar', eliminarUsuario)

module.exports = router;