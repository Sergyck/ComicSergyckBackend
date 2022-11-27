const { check } = require('express-validator');
const { validateResult } = require('../helpers/validateHelper');

const validateCreateComic = [
    check('nameComic', 'Debe ingresar el nombre del comic').exists().notEmpty(),
    check('nameComic', 'Solo se aceptan letras').isString(),
    check('editorial', 'Debe ingresar la editorial del comic').exists().notEmpty(),
    check('editorial', 'Solo se aceptan letras').isString(),
    check('topic', 'Debe ingresar el tema del comic').exists().notEmpty(),
    check('topic', 'Solo se aceptan letras').isString(),
    check('collections', 'Debe ingresar la colección del comic').exists().notEmpty(),
    check('collections', 'Solo se aceptan letras').isString(),
    check('pages', 'Debe ingresar el número de paginas del comic').exists().notEmpty(),
    check('pages', 'Solo se aceptan valores numericos').exists().isNumeric(),
    check('price', 'Debe ingresar el número de paginas del comic').exists().notEmpty(),
    check('price', 'Solo se aceptan valores numericos').exists().isNumeric(),
    check('autors', 'Debe ingresar los autores del comic').exists().notEmpty(),
    check('autors', 'Solo se aceptan letras').isString(),
    check('amount', 'Debe ingresar la cantidad de comics').exists().notEmpty(),
    check('amount', 'Solo se aceptan valores numericos').exists().isNumeric(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
];
// TODO: nameComic, editorial, topic, collection, pages, prices, autors, amount
module.exports = { validateCreateComic };