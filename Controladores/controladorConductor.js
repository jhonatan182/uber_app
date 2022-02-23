const ModeloConductor = require('../Modelos/Usuarios');
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
            const buscarConductor = await ModeloConductor.findOne({
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

