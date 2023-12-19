console.log("entro a product router");

const router = require('express').Router();

const Product = require ('../model/product.model.js');

router.get('/', (req,res) =>{
    res.send("router Productos")
});

router.get('/:ID', (req,res) =>{});

router.post('/', async (req,res) =>{
    const preductos = await Product.findAll();
    res.send(preductos);
});

router.put('/:ID', (req,res) =>{});

router.delete('/:ID', (req,res) =>{});

module.exports = router;