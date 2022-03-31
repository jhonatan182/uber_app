const { ubicaciones, guardarUbicacion,editarUbicacion,listarUbicacion,eliminarUbicacion} = require('../Controladores/controladorUbicaciones');
const express = require('express');
const router = express.Router();


router.get('/', ubicaciones);
router.post('/guardarUbicacion' , guardarUbicacion);
router.put('/editarUbicacion', editarUbicacion);
router.delete('/eliminarUbicacion', eliminarUbicacion);


module.exports = router;