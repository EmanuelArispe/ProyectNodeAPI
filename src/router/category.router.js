console.log("Entro a category router");

const router = require('express').Router();

const Category = require('../model/category.model.js');

router.get('/', async (req,res) =>{
    
});

router.get('/:ID', (req,res) =>{});


router.post('/', async (req,res) =>{
    const bodegas = await Category.findAll();

    res.send(bodegas);
});

router.put('/:ID', (req,res) =>{});

router.delete('/:ID', (req,res) =>{});

module.exports = router;