const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const comicSchema = new Schema({
    nameComic: {
        type: String,
        trim: true,
        required: [ true, 'El nombre es requerido' ]
    },
    editorial: {
        type: String,
        trim: true,
        required: [ true, 'La editorial es requerida' ]
    },
    topic: {
        type: String,
        trim: true,
        required: [ true, 'La tematica es requerida' ]
    },
    collections: {
        type: String,
        trim: true,
        required: [ true, 'La colección es requerida' ]
    },
    pages: {
        type: Number,
        trim: true,
        required: [ true, 'El numero de paginas es requerido' ]
    },
    price: {
        type: Number,
        trim: true,
        required: [ true, 'El precio es requerido' ]
    },
    autors: {
        type: String,
        trim: true,
        required: [ true, 'Los autores son requeridos' ]
    },
    color: {
        type: Boolean,
        default: false
    },
    lastSaleDate: {
        type: Date
    },
    status: {
        type: Boolean,
        default: true
    },
    amount: {
        type: Number,
        trim: true,
        required: [ true, 'La cantidad es requerida' ]
    },
    url_img: {
        type: String
    }
},
    {
        timestamps: true
    }
);

module.exports = model('comics', comicSchema);