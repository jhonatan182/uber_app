const sequelize = require('sequelize');
const db = require('../config/db');
const TipoUsuario = db.define(
    "tipousuarios",
    {
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },

        tipo: {
            type: sequelize.STRING(45),
            allowNull: false,
        },
    },

    {
        tableName: "tipousuarios",
        timestamps: false,
    }
);
module.exports = TipoUsuario;