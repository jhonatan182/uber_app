const sequelize = require('sequelize');
const db = require('../config/db');
const TipoVehiculo = db.define(
    "tipovehiculo",
    {
        id:{
            type:sequelize.INTEGER,
            primaryKey: true,
            allowNull:false,
        },
        tipo:{
            type: sequelize.STRING(45),
            allowNull: false,
        },
    },
    {
        tableName: "tipovehiculo",
        timestamps: false,
    }
);
module.exports=TipoVehiculo;