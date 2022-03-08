const ModeloVehiculo = require('../Modelos/Vehiculos');

exports.inicio = (req, res) => {
    res.send("Esto es el inicio de el modulo de tipos de Vehiculos");
};
exports.listar = async (req, res) => {
    const listaVehiculos = await ModeloVehiculo.findAll();
    if(listaVehiculos.length==0){
        res.send("No existen datos");
    }
    else{
        res.json(listaVehiculos);
    }
};
exports.nuevoVehiculo = async (req , res) => {

    const {placa, marca, modelo, color , usuarioId, tipoVehiculo} = req.body;

    if(!placa || !marca || !marca || !modelo || !color || !usuarioId ||  !tipoVehiculo) {
        res.send('Envie los datos necesarios');
        return;
    }

    try {
        
        const nuevoVehiculo = await ModeloVehiculo.create({
            placa,
            marca,
            modelo,
            color,
            usuarioId,
            tipoVehiculo
        });

        if(nuevoVehiculo) {
            res.send('Su vehiculo fue agregado correctamente');
        } else {
            res.send('No se puedo registrar el vehiculo');

        }

    } catch (error) {
        console.log(error);
    }

}

exports.editar = async (req, res) => {

    const { id } = req.query;
    const { placa, marca, modelo, color, usuarioId, tipoVehiculo } = req.body;
    if(!id || !placa || !marca || !modelo || !color || !usuarioId || !tipoVehiculo){
        res.send("Envie los datos completos");
    }
    else{
        var buscarvehiculo = await ModeloVehiculo.findOne({
            where:{
                id: id,
            }
        });
        if(!buscarvehiculo){
            res.send("El id no existe");
        }
        else{
            buscarvehiculo.placa=placa;
            buscarvehiculo.marca=marca;
            buscarvehiculo.modelo=modelo;
            buscarvehiculo.color=color;
            buscarvehiculo.usuarioId=usuarioId;
            buscarvehiculo.tipoVehiculo=tipoVehiculo;
            await buscarvehiculo.save()
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

exports.eliminarVehiculo = async (req, res) => {
    const { id } = req.query;
    if(!id){
        res.send("Envie el id del registro");
    }
    else{
        var buscarVehiculo = await ModeloVehiculo.findOne({
            where:{
                id: id,
            }
        });
        if(!buscarVehiculo){
            res.send("El id no existe");
        }
        else{
            await ModeloVehiculo.destroy({
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
