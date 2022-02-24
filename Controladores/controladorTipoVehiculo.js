const TipoVehiculo = require('../Modelos/TipoVehiculo');


const listarTiposVehiculos = async (req, res) => {

    try {
        
        const listarTipos = await TipoVehiculo.findAll();

        if(!listarTipos.length) {
            res.send('Aun no hay registro , agrega uno!');

        } else {
            res.json( listarTipos );
        }


    } catch (error) {
        console.log(error);
    }

};


const guardarNuevoTipo = async (req ,res) => {

    let { tipo }  = req.body;
    tipo = tipo.toLowerCase().trim();

    if( !tipo ) {
        res.send('Todos los campos son obligatorios');
        return;
    }

    try {
        
        const nuevoTipo = await TipoVehiculo.create({tipo});

        if(nuevoTipo) {
            res.send('Registro creado');
        }

    } catch (error) {
        console.log(error);
    }
}




module.exports = {
    listarTiposVehiculos,
    guardarNuevoTipo
}