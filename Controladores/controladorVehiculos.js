const ModeloVehiculo = require('../Modelos/Vehiculos');
exports.inicio = (req, res) => {
    res.send("Esto es el inicio de el modulo de tipos de usuarios");
};
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
