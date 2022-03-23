const { ubicaciones } = require('../Controladores/controladorUbicaciones');
const express = require('express');

const router = express.Router();


router.get('/', ubicaciones);


module.exports = router;