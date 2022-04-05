const Sequelize = require('sequelize');
const db = require('../config/db');
const bcrypt = require('bcrypt');

const Usuarios = db.define('usuarios' , {

    nombre : {
        type : Sequelize.STRING(45)
    } ,
    apellido : {
        type : Sequelize.STRING(45)
    },
    correo: {
        type : Sequelize.STRING(45)
    },
    password: {
        type : Sequelize.STRING(60)  
    },
    estado: {
        type : Sequelize.ENUM('activo','inactivo')
    } ,
    foto: {
        type : Sequelize.STRING(255)
    }, 
    telefono : {
        type: Sequelize.STRING(8)
    } ,
    tipoUsuario : {
        type : Sequelize.INTEGER
    }

} , {
    hooks : {
        beforeCreate(usuarios) {
            const hash = bcrypt.hashSync(usuarios.password , 10);
            usuarios.password = hash;
        } 
    }
}
);
Usuarios.prototype.verificarContrasena = (con, com) =>{
    return bcrypt.compareSync(con, com);
}


module.exports = Usuarios;