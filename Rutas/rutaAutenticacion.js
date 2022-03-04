const { Router } = require('express');
const { body } = require('express-validator');
const controlAutentic = require('../Controladores/controlAutenticacion');
const router = Router();

router.post('/iniciosesion/',
    body('correo')
        .isEmpty().withMessage('Debe enviar los datos del usuario correo o telefono'),
    body('password')
        .isLength({ min: 4 }).withMessage('La longitud minima de la contraseña es de 4 caracteres'),
    controlAutentic.incioSesion,
);
router.get('/error/', controlAutentic.ValidarToken);
module.exports = router;