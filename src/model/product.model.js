console.log("Entro a product model")

const { DataTypes, Model } = require('sequelize');
const sequelize = require('./model.js');

class Product extends Model { }

Product.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    bodega: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    vino: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    anio: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    maridaje: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    cepa: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    precio: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    caracteristica: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    recomendado: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Product',
    tableName: 'vinos',
    timestamps: false,
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci' 
});


module.exports = Product;

const Category = require('./category.model.js');

Product.belongsTo(Category, {
    foreignKey: 'bodega' // Nombre de la clave foránea en el modelo de Category
});

(async () => {
    Product.sync({force:true})  .then(() => {
                                    console.log("Product table updated successfully")
                                                })
                    .catch((e) => { console.log('There was an error', e) })
})();

