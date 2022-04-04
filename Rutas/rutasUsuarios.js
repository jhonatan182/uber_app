const express = require('express');
const { body, query } = require('express-validator')
const { crearUsuario, eliminarUsuario, listarConductores  , obtenerUsuarioPorId , listarPasajeros} = require('../Controladores/controladorUsuarios')

const router = express.Router();

router.post('/guardar', crearUsuario)
router.delete('/eliminar', eliminarUsuario)
router.get('/conductores', listarConductores)
router.get('/obtenerPorId', obtenerUsuarioPorId)
router.get('/pasajeros', listarPasajeros)

module.exports = router;