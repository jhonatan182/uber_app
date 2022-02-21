const express = require('express');
const { listarTiposVehiculos , guardarNuevoTipo } = require('../Controladores/controladorTipoVehiculo');

const router = express.Router();

router.get('/', listarTiposVehiculos);
router.post('/guardar', guardarNuevoTipo);


module.exports = router;