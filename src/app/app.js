console.log("entro a app.js")

const express = require("express");
const morgan = require('morgan');
const routerCat = require('../router/category.router.js');
const routerProd = require('../router/product.router.js');


const app = express();

// Muestra por consola la peticion y el estado de la respuesta
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send("This is Vinoteca");
});

app.use(express.urlencoded( {extended:true}));
app.use(express.json());

app.use('/api/v1/products', routerProd);
app.use('/api/v1/category', routerCat);

module.exports = app;