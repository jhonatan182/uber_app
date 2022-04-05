const { ubicaciones, guardarUbicacion,editarUbicacion,eliminarUbicacion , obtenerId} = require('../Controladores/controladorUbicaciones');
const express = require('express');
const router = express.Router();


router.get('/', ubicaciones);
router.post('/guardarUbicacion' , guardarUbicacion);
router.put('/editarUbicacion', editarUbicacion);
router.delete('/eliminarUbicacion', eliminarUbicacion);
router.get('/obtenerId', obtenerId);


module.exports = router;