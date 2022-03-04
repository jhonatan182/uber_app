const ModUsua = require('../Modelos/Usuarios');
const { validationResult } = require('express-validator');
const msj = require('../componentes/mensaje');
const passport = require('../config/passport');
const { Op } = require("sequelize");
//const EnviarCorreo = require('../configs/correo');

exports.validarAutenticado = passport.validarAutenticado;

exports.incioSesion = async (req, res, next) => {
    const validacion = validationResult(req);
    if (!validacion.isEmpty) {
        msj("Los datos ingresados no son validos", 200, validacion.array(), res);
    }
    else {
        const { correo, password } = req.body;
        const buscarUsuario = await ModUsua.findOne({
            where: {
                [Op.and]: [{
                    [Op.or]: [
                        { correo: correo },
                        { telefono: correo }
                    ],
                    estado: 'activo',
                }],
            }
        });
        console.log(buscarUsuario);
        if (!buscarUsuario) {
            msj("El usuario no existe o se encuentra inactivo", 200, [], res);
        }
        else {
            if (!buscarUsuario.verificarContrasena(password, buscarUsuario.password)) {
                msj("El usuario no existe o contrasena invalida", 200, [], res);
            }
            else {
                const usuar = {
                    telefono: buscarUsuario.telefono,
                    correo: buscarUsuario.correo,
                    nombre: buscarUsuario.nombre,
                };
                const token = passport.getToken({ id: buscarUsuario.id});
                console.log(buscarUsuario);
                const data = {
                    token: token,
                    usuario: usuar
                };
                msj("Bienvenido, " + usuar.nombre, 200, data, res);
            }
        }
    }
};

exports.ValidarToken = async (req, res) => {
    const { data } = req.body;
    msj("Token invalido", 200, data, res);
};

exports.enviarToken = async (req, res) => {
    const { data } = req.body;
    res.status(200).json(data);
};

/*exports.recuperarContrasena = async (req, res) => {
    const validacion = validationResult(req);
    if (!validacion.isEmpty) {
        msj("Los datos ingresados no son validos", 200, validacion.array(), res);
    }
    else {
        const { correo } = req.body;
        var busUsuario = await ModeloUsuar.findOne({
            where: {
                correo: correo,
            }
        });
        const nuevcontrasea = '159018';
        if (busUsuario) {
            busUsuario.contrasena = nuevcontrasea;
            await busUsuario.save();
            const data = {
                correo: busUsuario.correo,
                contrasena: nuevcontrasea,
            }
            EnviarCorreo.recuperarContrasena(data);
            msj("Correo Enviado", 200, [], res);
            ressend("Correo enviado");
        }
        else {
            msj("Los datos ingresados no son validos", 200, [], res);
        }
    }
}; */