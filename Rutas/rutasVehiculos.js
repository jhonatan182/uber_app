const { Router } = require('express');
const controladorVehiculos = require('../Controladores/controladorVehiculos');
const router = Router();
router.put('/editar', controladorVehiculos.editar);
module.exports=router;