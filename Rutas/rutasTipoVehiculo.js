const express = require('express');
const { listarTiposVehiculos , obtenerId, guardarNuevoTipo, modificarTipoVehiculo, eliminarTipoVehiculo } = require('../Controladores/controladorTipoVehiculo');

const router = express.Router();

router.get('/listar', listarTiposVehiculos);
router.post('/guardar', guardarNuevoTipo);
router.put('/modificar', modificarTipoVehiculo);
router.delete('/eliminar', eliminarTipoVehiculo);
router.get('/obtenerid', obtenerId);

module.exports = router;