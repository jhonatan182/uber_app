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
                const nuevoUsuario = Usuarios.create({
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

module.exports = {
    crearUsuario
}