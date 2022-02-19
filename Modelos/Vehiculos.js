const Sequelize = require('sequelize');
const db = require('../config/db');
const Vehiculos = db.define(
    "vehiculos",
    {
        id:{
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncremet:true,
            allowNull: false,
        },
        placa:{
            type: sequelize.STRING(45),
            allowNull: false,
        },
        marca:{
            type: sequelize.STRING(45),
            allowNull: false,
        },
        modelo:{
            type: sequelize.STRING(45),
            allowNull: false,
        },
        color:{
            type: sequelize.STRING(45),
            allowNull: false,
        },
        usuarioId:{
            type: sequelize.INTEGER,
            allowNull: false,
            autoIncrement:true,
        },
        tipoVehiculo:{
            type: sequelize.INTEGER,
            allowNull: false,
            
        },
    },
    {
        tableName: "vehiculos",
        timestamps: false,
    }
);
module.exports = Vehiculos
    
    
        
