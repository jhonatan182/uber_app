const sequelize = require('sequelize');
const db = require('../config/db');

const Ubicaciones = db.define('ubicaciones' , {
    nombre: {
        type : sequelize.STRING(50)
    }
    
});


module.exports = Ubicaciones;