const sequelize = require('./model.js');

class Product extends Model {}

Product.init({},{
    sequelize,
    modelName: 'Product',
});