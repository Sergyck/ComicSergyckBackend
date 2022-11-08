const express = require('express');
const router = express.Router();

/*const productController = require('../controllers/productController');*/
const userController = require('../controllers/userController');

const { validateCreate } = require('../validators/user.validator');

module.exports = function(){

    // ruta para prueba
    router.get('/',  async (req, res) => await res.send('Hola esto es una prueba'));

    // Crear user
    router.post('/users/create', validateCreate, userController.add);

    router.get('/users/list', userController.list);

    router.get('/users/find/:id', userController.find);

    router.put('/users/update/:id', userController.update);

    router.delete('/users/delete/:id', userController.delete);

    router.post('/users/login', userController.login);

    

    return router;

};