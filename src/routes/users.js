const express = require('express');
const router = express.Router();

const userController = require('../controllers/users');
const { validateCreateUser } = require('../validators/user.validator');

//module.exports = function (){

// * Ruta para prueba
router.get('/',  async (req, res) => await res.send('Estamos en la raiz USERS'));

// TODO ---> Crear user
    router.post('/create',
        [validateCreateUser, userController.add]
    );

// TODO ---> Listar users
    router.get('/list', userController.list);

// TODO ---> Buscar user por id
    router.get('/find/:id', userController.find);

// TODO ---> Actualizar user
    router.put('/update/:id', userController.update);

// TODO ---> Borrar user por id
    router.delete('/delete/:id', userController.delete);

// ! ---> Login user
    router.post('/login', userController.login);

module.exports = router;