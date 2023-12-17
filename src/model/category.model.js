const { DataTypes, Model } = require('sequelize');
const sequelize = require('./model.js');

class Bodega extends Model { }

Bodega.init({
    id_bodega: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    bodega: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    pais: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    provincia: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
    {
        sequelize,
        modelName: 'Bodega',
        tableName: 'Bodegas',
        timestamps: false // ... sacar marcas de agua
    });




module.exports = Bodega;
