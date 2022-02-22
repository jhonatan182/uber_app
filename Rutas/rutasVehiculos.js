const express = require('express');
const { body, query } = require('express-validator')
const {
    crearVehiculos,
    editarVehiculos,
    eliminarVehiculos,
    listarVehiculos
} = require('../Controladores/controladorVehiculos')

const router = express.Router();
router.get('/', listarVehiculos);

router.post('/crear',
    body('placa').notEmpty().exists().withMessage('Placa de Vehiculo obligatoria'),
    body('marca').notEmpty().exists().withMessage('Marca de Vehiculo obligatoria'),
    crearVehiculos);

router.delete('/eliminar', eliminarVehiculos);
router.put('/editar', editarVehiculos);



module.exports = router;