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

    if( !tipo ) {
        res.send(`El tipo de vehiculo es obligatorio`);
        return;
    }

    try {
        tipo = tipo.toLowerCase().trim();

        const existeTipo = await TipoVehiculo.findOne({ where : { tipo } });

        if(existeTipo) {
            res.send('Ya existe este tipo de vehiculo');
            return;
        }

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