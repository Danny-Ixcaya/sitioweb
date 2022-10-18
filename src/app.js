/**CONFIGURACIONES */
/**configuraciones */
const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
const exphbs = require("express-handlebars");



//INICIALIZANDO
const app = express();


//ARCHIVOS CSS(ESTATICOS)
app.use(express.static(path.join(__dirname, 'public')));


//AJUSTES 
app.set('port', process.env.PORT || 4100);

app.set('views', path.join(__dirname, 'views'));

/*MOTOR DE PLANTILLA HBS */

app.engine('.hbs', exphbs.engine({
    layoutsDir: path.join(app.get('views'), 'layouts'),
    defaultLayout: 'main',
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'

}));
app.set('view engine','.hbs');

//MIDDLEWARES
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended: false}));


//RUTAS
app.use(require('./routes'));

module.exports = app;