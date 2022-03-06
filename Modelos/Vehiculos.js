const Sequelize = require('sequelize');
const db = require('../config/db');
const Vehiculos = db.define(
    "vehiculos",
    {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement:true,
        },
        placa:{
            type: Sequelize.STRING(45),
            allowNull: false,
        },
        marca:{
            type: Sequelize.STRING(45),
            allowNull: false,
        },
        modelo:{
            type: Sequelize.STRING(45),
            allowNull: false,
        },
        color:{
            type: Sequelize.STRING(45),
            allowNull: false,
        },
        usuarioId:{
            type: Sequelize.INTEGER,
            allowNull: false
        },
        tipoVehiculo:{
            type: Sequelize.INTEGER,
            allowNull: false,
            
        },
    },
    {
        tableName: "vehiculos",
        timestamps: false,
    }
);
module.exports = Vehiculos
    
    
        
