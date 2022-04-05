const Viajes = require('../Modelos/Viajes');
const msj = require('../componentes/mensaje');

const listarViajes = async (req, res) => {
    const {pasajeroId} = req.query;

    try {
        
        const listarViajes = await Viajes.findAll({
            where: {
                pasajeroId: pasajeroId,
            }
        });

        if(!listarViajes.length) {
            msj('No has realizado ningun viaje, pide un Uber!', 200 , listarViajes , res);
        
        } else {

            msj('Viajes encontrados', 200 , listarViajes , res);
            
        }


    } catch (error) {
        console.log(error);
    }

};


const listarViajesConductor = async (req, res) => {
    const {conductorId} = req.query;

    try {
        
        const listarViajes = await Viajes.findAll({
            where: {
                conductorId: conductorId,
            }
        });

        if(!listarViajes.length) {
            msj('Aun no tienes viajes asignados', 200 , listarViajes , res);
          

        } else {
            msj('Viajes encontrados', 200 , listarViajes , res);
            
        }


    } catch (error) {
        console.log(error);
    }

};

const guardarViaje = async (req , res) => {

    const {pasajeroId, conductorId, direccionInicial, destinoFinal , fechaHora,distancia, total } = req.body;

    if(!pasajeroId || !conductorId || !direccionInicial || !destinoFinal || !distancia || !total ) {
        res.json('Envie los datos necesarios');
        return;
    }

    try {
        
        const guardarViaje = await Viajes.create({
           pasajeroId,
           conductorId,
           direccionInicial,
           destinoFinal : destinoFinal,
           distancia,
           total
        });

        if(guardarViaje) {
            res.json('Datos guardados correctamente');
        } else {
            res.json('No se puedo guardar el registro');

        }

    } catch (error) {
        console.log(error);
    }

}

const editarviaje = async (req, res) => {

    const { id } = req.query;
    const {pasajeroId, conductorId, direccionInicial, direccionFinal , fechaHora } = req.body;

    if(!id || !pasajeroId || !conductorId || !direccionInicial || !direccionFinal || !fechaHora ) {
        res.json("Envie los datos completos");
    }
    else{
        var buscarviaje = await Viajes.findOne({
            where:{
                id: id,
            }
        });
        if(!buscarviaje){
            res.json("El id no existe");
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
                res.json("Registro actualizado");
            })
            .catch((error)=>{
                console.log(error);
                res.json("Error al actualizar los datos");
            });
        }
    }
};

const eliminarViaje = async (req, res) => {
    const { id } = req.query;
    if(!id){
        res.json("Envie el id del registro");
    }
    else{
        var buscarviaje = await Viajes.findOne({
            where:{
                id: id,
            }
        });
        if(!buscarviaje){
            res.json("El id no existe");
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
    listarViajes,
    guardarViaje,
    editarviaje,
    eliminarViaje,
    listarViajesConductor
}