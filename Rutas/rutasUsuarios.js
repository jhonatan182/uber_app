const express = require('express');
const { body, query } = require('express-validator')
const {
    crearUsuario,
    editarUsuario,
    eliminarUsuario,
    listarUsuarios
} = require('../Controladores/controladorUsuarios')

const router = express.Router();

router.get('/', listarUsuarios);

router.post('/crear',
    body('usuario').notEmpty().exists().withMessage('Nombre de usuario obligatorio'),
    body('correo').notEmpty().isEmail().exists().withMessage('Correo no valido'), body('contrasenia').notEmpty()
    .isLength({ min: 6 }).withMessage('La constrasenia , menos de 6 caracteres'), crearUsuario);

router.delete('/eliminar', eliminarUsuario);
router.put('/editar', editarUsuario);




module.exports = router;