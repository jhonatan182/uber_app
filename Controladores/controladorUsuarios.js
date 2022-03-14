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
            res.send('Llene los campos obligatorios');

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

                if (nuevoUsuario) {
                    msj('Tu cuenta ha sido creada satisfactoriamente', 200 , [] , res);
                }

            } catch (error) {
                console.log(error);
                msj('Hubo un error al crear el usuario , vuelva a intentarlo', 200 , [] , res);
            }
        }
    }
};

const eliminarUsuario = async (req, res) => {
    const { id } = req.query;
    if(!id){
        res.send("Envie el id del registro");
    }
    else{
        var buscarUsuario = await Usuarios.findOne({
            where:{
                id: id,
            }
        });
        if(!buscarUsuario){
            res.send("El id no existe");
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
                res.send("Registro Eliminado");
            })
            .catch((error) => {
                console.log(error);
                res.send("Error al actualizar los datos");
            });
        } 
    }
};

module.exports = {
    crearUsuario,
    eliminarUsuario
}