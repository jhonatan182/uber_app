const express = require('express');
const { body, query } = require('express-validator')
const {
    crearViajes,
    editarViajes,
    eliminarViajes,
    listarViajes
} = require('../Controladores/controladorViajes')

const router = express.Router();

router.get('/', listarViajes);

router.post('/crear',
    body('pasajeroId').notEmpty().exists().withMessage('Id del pasajero es obligatoria'),
    body('conductorId').notEmpty().exists().withMessage('Id del conductor es obligatoria'),
    crearViajes);

router.delete('/eliminar', eliminarViajes);
router.put('/editar', editarViajes);



module.exports = router;