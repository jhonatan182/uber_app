const ModeloVehiculo = require('../Modelos/Vehiculos');

exports.inicio = (req, res) => {
    res.json("Esto es el inicio de el modulo de tipos de Vehiculos");
};
exports.listar = async (req, res) => {
    const listaVehiculos = await ModeloVehiculo.findAll();
    if(listaVehiculos.length==0){
        res.json("No existen datos");
    }
    else{
        res.json(listaVehiculos);
    }
};
exports.nuevoVehiculo = async (req , res) => {

    const {placa, marca, modelo, color , usuarioId, tipoVehiculo} = req.body;

    if(!placa || !marca || !marca || !modelo || !color || !usuarioId ||  !tipoVehiculo) {
        res.json('Envie los datos necesarios');
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
            res.json('Su vehiculo fue agregado correctamente');
        } else {
            res.json('No se puedo registrar el vehiculo');

        }

    } catch (error) {
        console.log(error);
    }

}

exports.editar = async (req, res) => {

    const { usuarioId } = req.query;
    const { placa, marca, modelo, color } = req.body;
    if(!usuarioId || !placa || !marca || !modelo || !color){
        res.json("Envie los datos completos");
    }
    else{
        var buscarvehiculo = await ModeloVehiculo.findOne({
            where:{
                usuarioId,
            }
        });
        if(!buscarvehiculo){
            res.json("El id no existe");
        }
        else{
            buscarvehiculo.placa=placa;
            buscarvehiculo.marca=marca;
            buscarvehiculo.modelo=modelo;
            buscarvehiculo.color=color;
            await buscarvehiculo.save()
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

exports.eliminarVehiculo = async (req, res) => {
    const { id } = req.query;
    if(!id){
        res.json("Envie el id del registro");
    }
    else{
        var buscarVehiculo = await ModeloVehiculo.findOne({
            where:{
                id: id,
            }
        });
        if(!buscarVehiculo){
            res.json("El id no existe");
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
                res.json("Registro Eliminado");
            })
            .catch((error) => {
                console.log(error);
                res.json("Error al actualizar los datos");
            });
        } 

    }
};


exports.obtenerVehiculoPorUsuario = async (req, res) => {

    const {usuarioId} = req.query;

    if(!usuarioId) {
        res.json('Debes enviar un id del usuario');
        return;
    }

    try {
        
        const vehiculoConductor = await ModeloVehiculo.findOne({where : {usuarioId}});

        if(vehiculoConductor) {
            res.json(vehiculoConductor);

        } else {
            res.json('Usuario no tiene asignado ningun vehiculo')
        }

    } catch (error) {
        console.log(error);
    }

}