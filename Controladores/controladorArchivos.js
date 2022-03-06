const fs=require('fs');
const path=require('path');
//const msj=require('../componentes/mensaje');
const Usuarios=require('../Modelos/Usuarios');

exports.Recibir=async(req,res)=>{
        const {filename}=req.file;
        const {id}=req.query;
        console.log(id);
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
                const buscarImagen= fs.existsSync(path.join(__dirname, '../public/img/' +
                buscarUsuario.imagen));
                if(!buscarImagen){
                    console.log('La imagen no existe');
                    
                }
                else{
                    try{
                        fs.unlinkSync(path.join(__dirname, '../public/img/'+ buscarUsuario.imagen));
                        console.log("imagen eliminada");
                    }
                    catch(error){
                        console.log('Error al eliminar la imagen' + error);
                    }
                    

                }
            }
            catch(error){
                console.log(error);
            }
            buscarUsuario.imagen=filename;
            await buscarUsuario.save()
            .then((data)=>{
                msj('Archivo almacenado',200,data,res) 
            })
                .catch((error)=>{
                    msj('Error',200,error,res);
                })
        }
};
