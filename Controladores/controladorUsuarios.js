const Usuarios = require('../Modelos/Usuarios');
const { validationResult } = require("express-validator")
const msj = require('../componentes/mensaje');

const crearUsuario = async(req, res) => {

    // console.log( req.body );

    const validacion = validationResult(req);


    if (!validacion.isEmpty()) {
        res.json(validacion.array());

    } else {
        const { nombre, apellido, correo, password, telefono, foto , tipoUsuario } = req.body;

        if (!nombre || !apellido || !correo || !password  || !telefono || !tipoUsuario) {
            res.json('Llene los campos obligatorios');

        } else {

            try {
                const nuevoUsuario = await Usuarios.create({
                    nombre,
                    apellido,
                    correo,
                    password,
                    foto,
                    telefono,
                    tipoUsuario
                });

                const data = {
                    usuario : nuevoUsuario
                }

                if (nuevoUsuario) {
                    msj('Tu cuenta ha sido creada satisfactoriamente', 200 , data , res);
                }

            } catch (error) {
                console.log(error);
                msj('Hubo un error al crear el usuario , vuelva a intentarlo', 400 , 400 , res);
            }
        }
    }
};

const eliminarUsuario = async (req, res) => {
    const { id } = req.query;
    if(!id){
        res.json("Envie el id del registro");
    }
    else{
        var buscarUsuario = await Usuarios.findOne({
            where:{
                id: id,
            }
        });
        if(!buscarUsuario){
            res.json("El id no existe");
        }
        else{
            await Usuarios.destroy({
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

const listarConductores = async(req , res) => {

    try {


        const conductores = await Usuarios.findAll({where: {tipoUsuario: 1}})
        
        if(conductores.length) {
            msj('conductores' , 200 , conductores , res);
        } else {
            msj('conductores' , 400 , conductores , res);
        }

    } catch (error) {
        console.log(error);
    }

}

const listarPasajeros = async (req , res) => {

    try {


        const pasajeros = await Usuarios.findAll({where: {tipoUsuario: 2}})
        
        if(pasajeros.length) {
            msj('pasajeros' , 200 , pasajeros , res);
        } else {
            msj('pasajeros' , 400 , pasajeros , res);
        }

    } catch (error) {
        console.log(error);
    }
}


const obtenerUsuarioPorId= async (req ,res) => {

    try {
        const { id } = req.query;

        const conductores = await Usuarios.findOne({where: {id}})
        
        if(conductores) {
            msj('conductores' , 200 , conductores , res);
        } else {
            msj('conductores' , 400 , conductores , res);
        }

    } catch (error) {
        console.log(error);
    }


}

module.exports = {
    crearUsuario,
    eliminarUsuario,
    listarConductores,
    obtenerUsuarioPorId,
    listarPasajeros
}