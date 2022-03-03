const enviarCorreo = require('../config/correo');
const ModeloUsuario = require('../Modelos/Usuarios');
const { validationResult } = require('express-validator');

exports.recuperarContrasena = async (req, res) =>{
    const validacion = validationResult(req);
    if(!validacion.isEmpty()){
        res.json(validacion.array());
    }
    else{
        const { correo } = req.body;
        var buscarUsuario = await ModeloUsuario.findOne({
            correo
        });
        const pin = "1234";
        if(buscarUsuario){
            const data = {
                correo: correo,
                pin: pin,
            };
            if(enviarCorreo.recuperarContrasena(data)){
                res.send("Correo enviado");
            }
            else{
                res.send("Error al enviar correo");
            }
        }
    }
};