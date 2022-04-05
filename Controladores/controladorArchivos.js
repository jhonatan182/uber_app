const fs=require('fs');
const path=require('path');
const msj=require('../componentes/mensaje');
const Usuarios=require('../Modelos/Usuarios');

exports.Recibir=async(req,res)=>{
        const {filename}=req.file;
        const {id}=req.query;

        var buscarUsuario=await Usuarios.findOne({
            where:{
                id:id,
            }
        });
        if(!buscarUsuario){
            msj('El usuario no existe',200,[],res);
        }
        else{
            try{
                const buscarfoto= fs.existsSync(path.join(__dirname, '../public/img/' +
                buscarUsuario.foto));
                if(!buscarfoto){
                    console.log('La foto no existe');
                    
                }
                else{
                    try{
                        fs.unlinkSync(path.join(__dirname, '../public/img/'+ buscarUsuario.foto));
                        console.log("foto eliminada");
                    }
                    catch(error){
                        console.log('Error al eliminar la foto' + error);
                    }
                    

                }
            }
            catch(error){
                console.log(error);
            }
            buscarUsuario.foto=filename;
            await buscarUsuario.save()
            .then((data)=>{
                msj('Archivo almacenado',200,data,res) 
            })
                .catch((error)=>{
                    msj('Error',200,error,res);
                })
        }
};
