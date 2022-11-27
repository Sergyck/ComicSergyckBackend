const express = require('express');
const router = express.Router();
const fs = require('fs');

const pathRouter = `${__dirname}`;

const removeExtension = (fileName) => {
    return fileName.split('.').shift();
};

fs.readdirSync(pathRouter).filter((file) => {
    const fileOutExt = removeExtension(file)
    const skip = ['index', 'routes'].includes(fileOutExt);
    if (!skip) {
        router.use(`/${fileOutExt}`, require(`./${fileOutExt}`))
        console.log('CARGAR RUTA -----> ', fileOutExt);
    }
});

module.exports = router;