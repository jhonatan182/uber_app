const ModTipU = require('../Modelos/TipoUsuarios');

exports.ListarTipU = async (req, res) => {
    const tipu = await ModTipU.findAll();
    if(tipu.length==0)
    {
        res.json("No existen Registros");
    }
    else
    {
        res.json(tipu);
    }
};

exports.GuardarTipU = async (req, res) =>{
    const { tipo } = req.body;
    
    if( !tipo ){
        res.json("Debe enviar los datos completos");
    }
    else{
        await ModTipU.create({
            tipo: tipo
        })
        .then((data) => {
            console.log(data);
            res.json("Registro almacenado correctamente");
        })
        .catch((error) =>{
            console.log(error)
        });
    }
};

exports.ActualizarTipoU = async (req, res) => {
    const { id } = req.query;
    const { tipo } = req.body;
    if(!id || !tipo){
        res.json("Datos Imcompletos");
    }
    else{
        var buscartipou = await ModTipU.findOne({
            where:{
                id: id,
            }
        });
        if(!buscartipou){
            res.json("El id no existe");
        }
        else{
            buscartipou.tipo = tipo,
            await buscartipou.save()
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

exports.EliminarTipoU = async (req, res) => {
    const { id } = req.query;
    if(!id){
        res.json("Envie el id del registro");
    }
    else{
        var buscartipou = await ModTipU.findOne({
            where:{
                id: id,
            }
        });
        if(!buscartipou){
            res.json("El id no existe");
        }
        else{
            await ModTipU.destroy({
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