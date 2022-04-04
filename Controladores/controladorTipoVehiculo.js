const TipoVehiculo = require('../Modelos/TipoVehiculo');


const listarTiposVehiculos = async (req, res) => {

    try {
        
        const listarTipos = await TipoVehiculo.findAll();

        if(!listarTipos.length) {
            res.json('Aun no hay registro , agrega uno!');

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
        res.json(`El tipo de vehiculo es obligatorio`);
        return;
    }

    try {
        tipo = tipo.toLowerCase().trim();

        const existeTipo = await TipoVehiculo.findOne({ where : { tipo } });

        if(existeTipo) {
            res.json('Ya existe este tipo de vehiculo');
            return;
        }

        const nuevoTipo = await TipoVehiculo.create({tipo});

        if(nuevoTipo) {
            res.json('Registro creado');
        }

    } catch (error) {
        console.log(error);
    }
}

const modificarTipoVehiculo = async (req, res) => {
    const { id } = req.query;
    const { tipo } = req.body;
    if(!id || !tipo){
        res.json("Datos Imcompletos");
    }
    else{
        var buscarTipoVehiculo = await TipoVehiculo.findOne({
            where:{
                id: id,
            }
        });

        if(!buscarTipoVehiculo){
            res.json("El id no existe");
        }
        else{
            buscarTipoVehiculo.tipo = tipo,
            await buscarTipoVehiculo.save()
            .then((data) =>{
                console.log(data);
                res.json("Registro actualizado");
            })
            .catch((error) =>{
                console.log(error);
                res.json("Error al actualizar los datos");
            });
        }
    }
};

const eliminarTipoVehiculo = async (req, res) => {
    const { id } = req.query;
    if(!id){
        res.json("Envie el id del registro");
    }
    else{
        var buscarTipoVehiculo = await TipoVehiculo.findOne({
            where:{
                id: id,
            }
        });
        if(!buscarTipoVehiculo){
            res.json("El id no existe");
        }
        else{
            await TipoVehiculo.destroy({
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

const obtenerId= async (req ,res) => {

    try {
        const { id } = req.query;

        const tipo = await TipoVehiculo.findOne({where: {id}})
        
        if(tipo) {
            msj('tipo' , 200 , tipo , res);
        } else {
            msj('tipo' , 400 , tipo , res);
        }

    } catch (error) {
        console.log(error);
    }


}

module.exports = {
    listarTiposVehiculos,
    guardarNuevoTipo,
    eliminarTipoVehiculo,
    modificarTipoVehiculo,
    obtenerId
}