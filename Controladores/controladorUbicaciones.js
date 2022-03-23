const Ubicaciones = require('../Modelos/Ubicaciones');
const msj = require('../componentes/mensaje');

const ubicaciones = async (req , res) => {

    try {
        
        const ubicaciones = await Ubicaciones.findAll();

        if(ubicaciones.length) {
            msj('ubicaciones' , 200 , ubicaciones , res);

        } else {
            msj('No hay ubicaciones' , 400 , [] , res);
        }

    } catch (error) {
        console.log(error);
    }


};


module.exports = {
    ubicaciones
}