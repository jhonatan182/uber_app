const sequelize = require('sequelize');
const db = require('../configuraciones/db');
const Viaje = db.define(
    "viaje",
    {
        id:{
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        pasajeroId:{
            type: sequelize.INTEGER,
            allowNull: false,
        },
        conductorId:{
            type: sequelize.INTEGER,
            allowNull: false,
        },
        direccionInicial:{
            type: sequelize.STRING(100),
            allowNull: false,
        },
        destinoFinal:{
            type: sequelize.STRING(100),
            allowNull: false,
        },
        distancia:{
            type: sequelize.STRING(40),
            allowNull: false,
        },
        fechaHora:{
            type: sequelize.DATE,
            allowNull: false,
        },
        total:{
            type: sequelize.DECIMAL(4,2),
            allowNull: false,
        },
    },
    {
        tableName: "viajes",
    }
);
module.exports = Viaje;