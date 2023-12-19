console.log("Entro a category model")

const { DataTypes, Model } = require('sequelize');
const sequelize = require('./model.js');


class Category extends Model { }

Category.init({
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
        type: DataTypes.TEXT,
        allowNull: false
    }
},
    {
        sequelize,
        modelName: 'Category',
        tableName: 'Bodegas',
        timestamps: false, // ... sacar marcas de agua
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci' 
    });

    module.exports = Category;

    const Product = require('./product.model.js');

    Category.hasMany(Product, {
        foreignKey: 'bodega' // Nombre de la clave foránea en el modelo de Product
    });

    (async () => {
             Category.sync().then(() => {
                                        console.log("Category table updated successfully")
                                        })
                            .catch((e) => { console.log('There was an error', e) })
    })();

