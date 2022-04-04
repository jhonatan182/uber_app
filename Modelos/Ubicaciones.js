const sequelize = require('sequelize');
const db = require('../config/db');

const Ubicaciones = db.define('ubicaciones' , {
    nombre: {
        type : sequelize.STRING(50),
        allowNull:false,
    },
    id:{
        type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement:true,
            allowNull:false,
    }
    
});


module.exports = Ubicaciones;