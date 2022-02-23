const {Router} = require('express');
const controladorConductor = require('../controladores/controladorConductor');
const { body, query} = require('express-validator');
const router = Router();

router.post('/guardar', controladorVehiculos.editar);

module.exports = router;