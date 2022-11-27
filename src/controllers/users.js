const UserModel = require('../models/UserModel');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Crear usuario
exports.add = async (req, res, next) => {
    const user = new UserModel(req.body);
    try {
        const { document, name, lastname, email, phone, username, password } = req.body;
        const salt = bcryptjs.genSaltSync();
        user.password = bcryptjs.hashSync(password, salt);
        const resUser = await UserModel.create(user);
        //const resUser = await user.save();
        res.status(200).json({
            message: 'Nuevo usuario agregado',
            data: resUser
        });
    }catch (error){
        console.log(error);
        res.send(error);
        next();
    }
};

exports.list = async (req, res, next) => {
    try {
        const users = await UserModel.find({});
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.send(error);
        next();
    }
};

exports.find = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        if(!user){
            res.status(404).json({
                message: 'El usuario no existe'
            });
        }
        res.json(user);

    } catch (error) {
        res.status(400).json({
            message: `Error al procesar la petición ${error}`
        });
    }
};

exports.update = async (req, res, next) => {
    try {
        if(req.body.password){
            const salt = bcryptjs.genSaltSync();
            req.body.password = bcryptjs.hashSync(req.body.password, salt);
        }
        console.log(req.body);
        const user = await UserModel.findOneAndUpdate(
            { id: req.params.id },
            req.body,
            {new: true}
        );
        res.json({
            message: 'Usuario actualizado correctamente',
            user
        });
    } catch (error) {
        res.status(400).json({
            message: `Error al procesar la petición ${error}`
        });
    }
};

exports.delete = async (req, res) => {
    try {
        await UserModel.findOneAndDelete({ _id: req.params.id });
        res.status(200).json({ message: 'El usuario ha sido eliminado correctamente' });
    } catch (error) {
        res.status(400).json({
            message: `Error al procesar la petición ${error}`
        });
    }
};

exports.login = async (req, res, next) => {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username });
    if (!user) return res.status(401).send(`El username ${username}, no existe...`);

    const valiPass =  await bcryptjs.compareSync(password, user.password);

    if (!valiPass) return res.status(401).send({ message: 'Contraseña incorrecta...'});

    const token = jwt.sign({_id: user._id}, 'secretKey');
    res.status(200).json({ message: 'login OK...', token: token});
};