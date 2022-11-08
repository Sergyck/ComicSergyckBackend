const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const DB_URI = process.env.DB_URI;
const DB_NAME = process.env.DB_NAME;
const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(DB_URI + DB_NAME, options)
    .then(con => console.log(`Base de datos ${con} ${DB_URI} ${DB_NAME} conectada correctamente`))
    .catch(error => console.error(error));

module.exports = mongoose;