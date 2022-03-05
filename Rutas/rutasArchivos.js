const{Router} = require ('express');
const controladorArchivos=require('../Controladores/controladorArchivos');
const controladorAutenticacion=require('../Controladores/controlAutenticacion');
const multer =require('multer');
const path =require('path');
const storage =multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(__dirname, '../public/img'));
    },
    filename: function (req,file,cb){
        const unico =Date.now()+ '-'+ Math.round(Math.random()* 1E9);
        cb(null,file.fieldname + '-'+ unico+file.mimetype.replace( "/","."));
    }
});
const upload=multer({
    storage:storage,
});
const router =Router ();
router.post('/img',controladorAutenticacion.validarAutenticado,upload.single('img'), controladorArchivos.Recibir);

module.exports=router; 