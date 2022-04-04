const Ubicaciones = require('../Modelos/Ubicaciones');
const msj = require('../componentes/mensaje');

const ubicaciones = async (req , res) => {

    try {
        
        const ubicaciones = await Ubicaciones.findAll();

        if(ubicaciones.length) {
            msj('ubicaciones' , 200 , ubicaciones , res);

        } else {
            msj('No hay ubicaciones' , 400 , [] , res);
        }

    } catch (error) {
        console.log(error);
    }


};

const guardarUbicacion = async (req , res) => {

    const { nombre } = req.body;

    if( !nombre ) {
        res.json('Envie los datos necesarios');
        return;
    }

    try {
        
        const guardarUbicacion = await Ubicaciones.create({
           
           nombre
        });

        if(guardarUbicacion) {
            res.json('Datos guardados correctamente');
        } else {
            res.json('No se puedo guardar el registro');

        }

    } catch (error) {
        console.log(error);
    }

}


const editarUbicacion = async (req, res) => {
    const { id } = req.query;
    const { nombre } = req.body;
    if(!id || !nombre){
        res.json("Datos Incompletos");
    }
    else{
        var buscarubicaciones = await ubicaciones.findOne({
            where:{
                id: id,
            }
        });

        if(!buscarubicaciones){
            res.json("El id no existe");
        }
        else{
            buscarubicaciones.nombre = nombre,
            await buscarubicaciones.save()
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

const eliminarUbicacion = async (req, res) => {
    const { id } = req.query;
    if(!id){
        res.json("Envie el id del registro");
    }
    else{
        var buscarUbicacion = await Ubicaciones.findOne({
            where:{
                id: id,
            }
        });
        if(!buscarUbicacion){
            res.json("El id no existe");
        }
        else{
            await Ubicaciones.destroy({
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




module.exports = {
    ubicaciones,
    guardarUbicacion,
    editarUbicacion,
    eliminarUbicacion

}