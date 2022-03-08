const {Router} = require('express');
const controladorConductor = require('../controladores/controladorConductor');
const { body, query} = require('express-validator');
const router = Router();

router.put('/modificar', controladorConductor.modificar);
router.put('/modificarContrasena', controladorConductor.modificarContrasena);
router.put('/modificarNombres', controladorConductor.modificarNombres);
router.put('/modificarEstado', controladorConductor.modificarEstado);
router.delete('/eliminar', controladorConductor.EliminarConductor)

module.exports = router;