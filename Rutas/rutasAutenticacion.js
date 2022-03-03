const {Router} = require('express');
const controladorAutenticacion = require('../Controladores/controladorAutenticacion');
const { body, query} = require('express-validator');
const router = Router();

router.post('/recuperarContrasena', 
    body('correo').isEmail().withMessage("Debe enviar un correo válido"),
    controladorAutenticacion.recuperarContrasena);

module.exports = router;