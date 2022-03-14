const express = require('express');
const { listarTiposVehiculos , guardarNuevoTipo, modificarTipoVehiculo, eliminarTipoVehiculo } = require('../Controladores/controladorTipoVehiculo');

const router = express.Router();

router.get('/', listarTiposVehiculos);
router.post('/guardar', guardarNuevoTipo);
router.put('/modificar', modificarTipoVehiculo);
router.delete('/eliminar', eliminarTipoVehiculo);

module.exports = router;