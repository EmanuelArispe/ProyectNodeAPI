const router = require('express').Router();

const Bodega = require('../model/category.model.js');

router.get('/', async (req,res) =>{
    
});

router.get('/:ID', (req,res) =>{});


router.post('/', async (req,res) =>{
    await Bodega.sync();
});

router.put('/:ID', (req,res) =>{});

router.delete('/:ID', (req,res) =>{});

module.exports = router;