const Usuarios = require('../Modelos/Usuarios');
const { validationResult } = require("express-validator")

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
                    res.send('Usuario creado correctamente');
                }

            } catch (error) {
                console.log(error);
            }
        }
    }
};

module.exports = {
    crearUsuario
}