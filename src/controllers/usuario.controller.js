const usuarioCtrl = {}

const Usuario = require('../models/Usuario')

usuarioCtrl.getUsuarios = async(req, res)=>{
    const usuarios = await Usuario.find()
    res.json(usuarios)
}

usuarioCtrl.createUsuario= async(req, res) =>{
    const {nombre, apellido, edad, telefono, correo, imagen} = req.body;
    const newUsuario = new Usuario({
        nombre,
        apellido,
        edad,
        telefono,
        correo,
        imagen
    })
    await newUsuario.save();
    res.json({message: "el usuario ha sido creado"})
}

usuarioCtrl.getUsuario = async(req, res)=>{
    const oneUsuario = await Usuario.findById(req.params.id)
    res.json(oneUsuario);
}

usuarioCtrl.deleteUsuario = async(req, res) =>{
    await Usuario.findByIdAndDelete(req.params.id)
    res.json({message: 'usuario eliminado'})
}

usuarioCtrl.updateUsuario = async(req, res)=>{
    const {nombre, apellido, edad, telefono, correo, imagen} = req.body;
    await Usuario.findByIdAndUpdate(req.params.id,{
        nombre,
        apellido,
        edad,
        telefono,
        correo,
        imagen
    })
    res.json({message : 'el usuario ha sido actualizado'})
}

module.exports = usuarioCtrl;