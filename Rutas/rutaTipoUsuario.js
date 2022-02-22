const express = require('express');

const {
    crearTipoUsuario,
    editarTipoUsuario,
    eliminarTipoUsuario,
    listarTiposUsuario
} = require('../Controladores/controladorUsuarios')

const router = express.Router();

router.get('/', listarTiposUsuario);
router.post('/crear', crearTipoUsuario);
router.put('/editar', editarTipoUsuario);
router.delete('/eliminar', eliminarTipoUsuario);



module.exports = router;