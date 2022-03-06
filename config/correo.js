const nodemailer = require('nodemailer');

exports.recuperarContrasena = async (data) => { 

    const configuracionCorreo = {
        from: process.env.correo_app,
        to: data.correo,
        subject: "Uber - Recuperar contraseña",
        text: "Tu nueva contraseña es: " + data.pin,
    };
    
    const transporte = nodemailer.createTransport({
        host: process.env.correo_servicio,
        port: process.env.correo_port,
        secure:true,
        auth:{
            user: process.env.correo_app,
            pass: process.env.correo_contrasena,
        },
    });

    await transporte.verify( async function(error, sucess) {
        if(error){
            console.log(error);
            return false;
        }
        else{
            console.log("El servidor puede enviar correos");
        }
    });

    return await transporte.sendMail(configuracionCorreo); 
};