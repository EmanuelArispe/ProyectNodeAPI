const router = require('express').Router();

router.get('/', (req,res) =>{
    res.send("router Productos")
});

router.get('/:ID', (req,res) =>{});

router.post('/', (req,res) =>{});

router.put('/:ID', (req,res) =>{});

router.delete('/:ID', (req,res) =>{});

module.exports = router;