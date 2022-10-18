const { Router }  = require('express');
const { trusted } = require('mongoose');
// const { render } = require('../app.js');
const router = Router();
const { inicio } = require ('../controllers/sitioweb.js'); 

router.get('/', (req, res) => {
    res.render('inicio');
});

router.get('/nosotros', (req, res) => {
    res.render('nosotros');
    
});

router.get('/menu', (req, res) => {
    res.render('menu');
    
});

router.get('/contactanos', (req, res) => {
    res.render('contactanos');
});

module.exports = router;