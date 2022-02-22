const express = require('express');

const {
    crearTipoVehiculo,
    editarTipoVehiculo,
    eliminarTipoVehiculo,
    listarTiposVehiculo
} = require('../Controladores/controladorVehiculo')

const router = express.Router();

router.get('/', listarTiposVehiculo);
router.post('/crear', crearTipoVehiculo);
router.put('/editar', editarTipoVehiculo);
router.delete('/eliminar', eliminarTipoVehiculo);


module.exports = router;