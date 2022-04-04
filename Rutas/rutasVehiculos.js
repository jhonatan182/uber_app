const { Router } = require('express');
const controladorVehiculos = require('../Controladores/controladorVehiculos');
const router = Router();

router.post('/nuevo-vehiculo' , controladorVehiculos.nuevoVehiculo );
router.put('/editar', controladorVehiculos.editar);
router.delete('/eliminar', controladorVehiculos.eliminarVehiculo);
router.get('/obtenerVehiculoPorUsuario', controladorVehiculos.obtenerVehiculoPorUsuario);

module.exports=router;