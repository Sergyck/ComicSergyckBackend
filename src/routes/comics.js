const express = require('express');
const router = express.Router();

const comicController = require('../controllers/comics');
const { validateCreateComic } = require('../validators/comic.validator');

// * Ruta para prueba
router.get('/',  async (req, res) => await res.send('Estamos en la raiz COMICS'));

// TODO ---> Crear comic
    router.post('/create',
        [validateCreateComic, comicController.add]
    );

// TODO ---> Listar comic
    router.get('/list', comicController.list);

// TODO ---> Buscar comic por id
    router.get('/find/:id', comicController.find);

// TODO ---> Actualizar comic
    router.put('/update/:id', comicController.update);

// TODO ---> Borrar comic por id
    router.delete('/delete/:id', comicController.delete);

module.exports = router;