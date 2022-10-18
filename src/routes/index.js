const { Router }  = require('express');
const router = Router();
const { inicio } = require ('../controllers/sitioweb.js'); 

router.get('/', inicio);

router.get('/nosotros', (req, res) => {
    res.render('nosotros');
    
});

router.get('/contactanos', (req, res) => {
    res.render('contactanos');
});

router.get('/login', (req, res) => {
    res.render('login');
});



module.exports = router;