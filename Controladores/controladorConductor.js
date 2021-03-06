const ModeloUsuario = require('../Modelos/Usuarios');
const { validatorResult } = require('express-validator');
const Usuario = require('../Modelos/Usuarios');

exports.inicio = (req, res) => {
    res.json("Bienvenido este es el inicio de el modulo de Conductores");
};


exports.modificar = async (req, res) => {
    //console.log(req.query)
    //console.log(req.body)
    const { id } = req.query;
    const { nombre, apellido, correo, telefono, foto } = req.body;
    if (!id || !nombre || !apellido || !correo || !telefono) {
        res.json("Envie los datos completos");
    }
    else {
        var buscarConductor = await ModeloUsuario.findOne({
            where: {
                id: id,
            }
        });
        if (!buscarConductor) {
            res.json("El id no esixte");
        }
        else {
            buscarConductor.nombre = nombre;
            buscarConductor.apellido = apellido;
            buscarConductor.correo = correo;
            buscarConductor.telefono = telefono;

            await buscarConductor.save()
                .then((data) => {
                    console.log(data);
                    res.json("Registro Actualizado");
                })
                .catch((error) => {
                    console.log(error);
                    res.json("Error al actualizar los datos");
                });
        }
    }
};

exports.modificarContrasena = async (req, res) => {
    const { id } = req.query;
    const { contrasena } = req.body;
    if (!id || !contrasena) {
        res.json("Envie los datos completos");
    }
    else {
        var buscarConductor = await ModeloUsuario.findOne({
            where: {
                id: id,
                estado: 'activo'
            }
        });
        if (!buscarTipo) {
            res.json("El id no esixte o está inactivo");
        }
        else {
            buscarConductor.contrasena = contrasena;

            await buscarConductor.save()
                .then((data) => {
                    console.log(data);
                    res.json("Registro Actualizado");
                })
                .catch((error) => {
                    console.log(error);
                    res.json("Error al actualizar los datos");
                })
        }
    }
};

exports.modificarNombres = async (req, res) => {
    const { id } = req.query;
    const { nombre, apellido } = req.body;
    if (!id || !nombre || !apellido) {
        res.json("Envie los datos completos");
    }
    else {
        var buscarConductor = await ModeloUsuario.findOne({
            where: {
                id: id,
            }
        });
        if (!buscarTipo) {
            res.json("El id no esixte");
        }
        else {
            buscarConductor.nombre = nombre;
            buscarConductor.apellido = apellido;

            await buscarConductor.save()
                .then((data) => {
                    console.log(data);
                    res.json("Registro Actualizado");
                })
                .catch((error) => {
                    console.log(error);
                    res.json("Error al actualizar los datos");
                })
        }
    }
};



exports.modificarEstado = async (req, res) => {

    const {id} = req.query;
    const {estado} = req.body;
    
    if (!id || !estado){
        res.json("Envie los datos completos" );
    }
    else {
        var buscarConductor = await ModeloUsuario.findOne({
            where: {
                id: id,
            }
        });

        if (!buscarConductor){
            res.json("El id no esixte");
        }
        else {
            buscarConductor.estado = estado;

            await buscarConductor.save()

            .then((data) => {
                console.log(data);
                res.json("Registro Actualizado");
            })
            .catch((error) => {
                console.log(error);
                res.json("Error al actualizar los datos");
            })

        }
    }
};

exports.EliminarConductor = async (req, res) => {
    const { id } = req.query;
    if (!id) {
        res.json("Envie el id del registro");
    }
    else {
        var buscarConductor = await ModeloConductor.findOne({
            where: {
                id: id,
            }
        });
        if (!buscarConductor) {
            res.json("El id no existe");
        }
        else {
            await ModeloConductor.destroy({
                where:
                {
                    id: id,
                }

            })
                .then((data) => {
                    console.log(data);
                    res.json("Registro Eliminado");
                })
                .catch((error) => {
                    console.log(error);
                    res.json("Error al actualizar los datos");
                });
        }
    }
};

