const { Router } = require('express');
const controlTipU = require('../Controladores/controladorTipoUsuarios');
const router = Router();

router.get('/listartipu', controlTipU.ListarTipU);
router.post('/guardartipu', controlTipU.GuardarTipU);
router.put('/modificartipu', controlTipU.ActualizarTipoU);
router.delete('/eliminartipu', controlTipU.EliminarTipoU);