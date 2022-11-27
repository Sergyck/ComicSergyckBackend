require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const routes = require('./src/routes');

const app = express();

// Setting
app.set('port', process.env.PORT || 3000);
const port = app.get('port');

// Database
require('./config/conexion');

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

// Routes
app.use('/api', routes);

//Static files
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/uploads'));

// Server is listening
app.listen(port, () => {
    console.log(`Servidor conectado puerto ${port}`);
});