const express = require('express');
const router = express.Router()
// RUTAS 
router.get('/', function (req, res) {
    res.status(200).send('Hola mundo!');
});

router.get('/chau', function (req, res) {
    res.status(200).send('Hola mundo!');
});

router.get('/prueba', function (req, res) {
    res.status(200).send({nombre:'Juan', apellido:'unapellido'})
});

module.exports = router