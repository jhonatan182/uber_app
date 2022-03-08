const ModeloUsuario = require('../Modelos/Usuarios');
const { validatorResult } = require('express-validator');

exports.inicio = (req, res) => {
    res.send("Bienvenido este es el inicio de el modulo de Conductores");
};
exports.guardar = async (req,res) => {
    const validacion = validatorResult(req);
    if(!validacion.isEmpty()){
        req.json(validacion.array());
    }
    else{
        const {id, nombre, apellido, correo,telefono} = req.body;
        if(!id || !nombre || !apellido || !correo|| !telefono ){
            res.send("Debe ingresar los datos completos");
        }
        else{
            const buscarConductor = await ModeloUsuario.findOne({
                where:{
                    id: id,
                }
            });
            if (!buscarConductor){
                res.send("El id de la Conductor no existe o está inactivo");
            }
            else{

                await ModeloUsuario.create({ 
                  
                    nombre,
                    id,
                    apellido, 
                    correo,
                    telefono,
                })
                .then((data)=> {
                    console.log(data);
                    res.send("Registro Almacenado");
                })
                .catch((error)=> {
                    console.log(error);
                    res.send("Error al guardar los datos");
                });
            }
        }
    }
};


exports.modificar = async (req, res) => {
    const {id} = req.query;
    const {nombre,apellido, correo, telefono, estado, foto} = req.body;
    if (!id || !nombre || !apellido || !correo || !telefono || !estado || !foto){
        res.send("Envie los datos completos" );
    }
    else{
        var buscarConductor = await ModeloUsuario.findOne({
            where: {
                id: id,
            }
        });
        if (!buscarConductor){
            res.send("El id no esixte");
        }
        else{
            buscarConductor.nombre = nombre;
            buscarConductor.apellido = apellido;
            buscarConductor.correo = correo;
            buscarConductor.telefono = telefono;
            buscarConductor.estado = estado;
            buscarConductor.foto = foto;

            await buscarConductor.save()
            .then((data) => {
                console.log(data);
                res.send("Registro Actualizado");
            })
            .catch((error) => {
                console.log(error);
                res.send("Error al actualizar los datos");
            });
        }
    }
};

exports.modificarContrasena = async (req, res) => {
    const {id} = req.query;
    const {contrasena} = req.body;
    if (!id || !contrasena){
        res.send("Envie los datos completos" );
    }
    else{
        var buscarConductor = await ModeloUsuario.findOne({
            where: {
                id: id,
                estado: 'activo'
            }
        });
        if (!buscarTipo){
            res.send("El id no esixte o está inactivo");
        }
        else{
            buscarConductor.contrasena = contrasena;

            await buscarConductor.save()
            .then((data) => {
                console.log(data);
                res.send("Registro Actualizado");
            })
            .catch((error) => {
                console.log(error);
                res.send("Error al actualizar los datos");
            })
        }
    }
};

exports.modificarNombres = async (req, res) => {
    const {id} = req.query;
    const {nombre,apellido} = req.body;
    if (!id || !nombre || !apellido){
        res.send("Envie los datos completos" );
    }
    else{
        var buscarConductor = await ModeloUsuario.findOne({
            where: {
                id: id,
            }
        });
        if (!buscarTipo){
            res.send("El id no esixte");
        }
        else{
            buscarConductor.nombre = nombre;
            buscarConductor.apellido = apellido;

            await buscarConductor.save()
            .then((data) => {
                console.log(data);
                res.send("Registro Actualizado");
            })
            .catch((error) => {
                console.log(error);
                res.send("Error al actualizar los datos");
            })
        }
    }
};



exports.modificarEstado = async (req, res) => {
    const {id} = req.query;
    const {estado} = req.body;
    if (!id || !estado){
        res.send("Envie los datos completos" );
    }
    else{
        var buscarConductor = await ModeloUsuario.findOne({
            where: {
                id: id,
            }
        });
        if (!buscarTipo){
            res.send("El id no esixte");
        }
        else{ 
            buscarConductor.estado = estado;

            await buscarConductor.save()
            .then((data) => {
                console.log(data);
                res.send("Registro Actualizado");
            })
            .catch((error) => {
                console.log(error);
                res.send("Error al actualizar los datos");
            })
        }
    }
};

