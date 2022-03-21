const Viajes = require('../Modelos/Viajes');


const listarViajes = async (req, res) => {

    try {
        
        const listarViajes = await Viajes.findAll();

        if(!listarViajes.length) {
            res.send('Aun no hay registro , agrega uno!');

        } else {
            res.json( listarViajes );
        }


    } catch (error) {
        console.log(error);
    }

};

const guardarViaje = async (req , res) => {

    const {pasajeroId, conductorId, direccionInicial, direccionFinal , fechaHora } = req.body;

    if(!pasajeroId || !conductorId || !direccionInicial || !direccionFinal || !fechaHora ) {
        res.send('Envie los datos necesarios');
        return;
    }

    try {
        
        const guardarViaje = await Viajes.create({
           pasajeroId,
           conductorId,
           direccionInicial,
           direccionFinal,
           fechaHora
        });

        if(guardarViaje) {
            res.send('Datos guardados correctamente');
        } else {
            res.send('No se puedo guardar el registro');

        }

    } catch (error) {
        console.log(error);
    }

}

const editarviaje = async (req, res) => {

    const { id } = req.query;
    const {pasajeroId, conductorId, direccionInicial, direccionFinal , fechaHora } = req.body;

    if(!id || !pasajeroId || !conductorId || !direccionInicial || !direccionFinal || !fechaHora ) {
        res.send("Envie los datos completos");
    }
    else{
        var buscarviaje = await Viajes.findOne({
            where:{
                id: id,
            }
        });
        if(!buscarviaje){
            res.send("El id no existe");
        }
        else{
            buscarviaje.pasajeroId=pasajeroId;
            buscarviaje.conductorId=conductorId;
            buscarviaje.direccionInicial=direccionInicial;
            buscarviaje.direccionFinal=direccionFinal;
            buscarviaje.fechaHora=fechaHora;
            await buscarviaje.save()
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

const eliminarViaje = async (req, res) => {
    const { id } = req.query;
    if(!id){
        res.send("Envie el id del registro");
    }
    else{
        var buscarviaje = await Viajes.findOne({
            where:{
                id: id,
            }
        });
        if(!buscarviaje){
            res.send("El id no existe");
        }
        else{
            await Viajes.destroy({
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
    listarViajes,
    guardarViaje,
    editarviaje,
    eliminarViaje
}