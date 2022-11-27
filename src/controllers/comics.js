const ComicModel = require('../models/ComicModel');

// Crear comic
exports.add = async (req, res, next) => {
    const user = new ComicModel(req.body);
    try {
        const resComic = await ComicModel.create(user);
        res.status(200).json({
            message: 'Nuevo comic agregado',
            data: resComic
        });
    }catch (error){
        console.log(error);
        res.send(error);
        next();
    }
};

exports.list = async (req, res, next) => {
    try {
        const comics = await ComicModel.find({});
        res.status(200).json(comics);
    } catch (error) {
        console.log(error);
        res.send(error);
        next();
    }
};

exports.find = async (req, res) => {
    try {
        const comic = await ComicModel.findById(req.params.id);
        if(!comic){
            res.status(404).json({
                message: 'El comic no existe'
            });
        }
        res.json(comic);

    } catch (error) {
        res.status(400).json({
            message: `Error al procesar la petición ${error}`
        });
    }
};

exports.update = async (req, res, next) => {
    try {
        const comic = await ComicModel.findOneAndUpdate(
            { id: req.params.id },
            req.body,
            {new: true}
        );
        res.json({
            message: 'Comic actualizado correctamente',
            comic
        });
    } catch (error) {
        res.status(400).json({
            message: `Error al procesar la petición ${error}`
        });
    }
};

exports.delete = async (req, res) => {
    try {
        await ComicModel.findOneAndDelete({ _id: req.params.id });
        res.status(200).json({ message: 'El comic ha sido eliminado correctamente' });
    } catch (error) {
        res.status(400).json({
            message: `Error al procesar la petición ${error}`
        });
    }
};