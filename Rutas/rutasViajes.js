const { Router } = require('express');
const controladorViajes = require('../Controladores/controladorViajes');
const router = Router();

router.post('/guardarViajes' , controladorViajes.guardarViaje );
router.put('/editarViaje', controladorViajes.editarviaje);
router.get('/listarViaje', controladorViajes.listarViajes);
router.delete('/eliminarViaje', controladorViajes.eliminarViaje);

module.exports=router;