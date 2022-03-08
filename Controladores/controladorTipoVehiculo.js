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
const modificartipo = async (req, res) => {
    const { id } = req.query;
    const { tipo } = req.body;
    if(!id || !tipo){
        res.send("Envie los datos completos");
    }
    else{
        var buscartipo = await TipoVehiculo.findOne({
            where:{
                id: id,
            }
        });
        if(!buscartipo){
            res.send("El id no existe");
        }
        else{
            buscartipo.tipo=tipo;
            await buscartipo.save()
            .then((data)=>{
                console.log(data);
                res.send("Registro actualizado");
            })
            .catch((error)=>{
                console.log(error);
                res.send("Error al actualizar los datos");
            });
        }
    }
};
const eliminartipo = async (req, res) => {
    const { id } = req.query;
   if(!id){
        res.send("Envie el id del registro");
    }
    else{
            await TipoVehiculo.destroy({
                where:
                {
                    id: id,
                }
            })
            .then((data)=>{
                console.log(data);
                if(data==0){
                    res.send("El id no existe");
                }
                else{
                     res.send("Registro eliminado");
                }   
            })
            .catch((error)=>{
                console.log(error);
                res.send("Error al eliminar el registro");
            })
    }
};



module.exports = {
    listarTiposVehiculos,
    guardarNuevoTipo,
    modificartipo,
    eliminartipo
}