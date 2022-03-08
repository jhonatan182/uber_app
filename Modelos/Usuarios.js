const sequelize = require('sequelize');
const db = require('../config/db');
const bcrypt = require('bcrypt');

const Usuario = db.define(
    'usuario',
    {
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        nombre: {
            type: sequelize.STRING(45),
            allowNull: false,
        },
        apellido: {
            type: sequelize.STRING(45),
            allowNull: false,
        },
        correo: {
            type: sequelize.STRING(45),
            allowNull: false,
        },
        password: {
            type: sequelize.STRING(60),
            allowNull: false,
        },
        estado: {
            type: sequelize.ENUM('activo', 'inactivo'),
            allowNull: false,
        },
        foto: {
            type: sequelize.STRING(255),
            allowNull: true,
        },
        telefono: {
            type: sequelize.STRING(8),
            allowNull: false,
        },
        tipoUsuario: {
            type: sequelize.INTEGER,
            allowNull: false,
        }

    },
    {
        tableName: "usuarios"
    },
    {
        hooks: {
            beforeCreate(usuarios) {
                const hash = bcrypt.hashSync(usuarios.password, 10);
                usuarios.password = hash;
            },
            beforeUpdate(usuarios) {
                const hash = bcrypt.hashSync(usuarios.password, 10);
                usuarios.password = hash;
            }
        }
    }
);

Usuario.prototype.verificarContrasena = (con, com) => {
    return bcrypt.compareSync(con, com);
}

module.exports = Usuario;