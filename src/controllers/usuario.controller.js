const { response } = require('express');
const { TipoUsuario } = require('../models/TipoUsuario');
const { Usuario } = require('../models/Usuario');

async function getUser(req, res = response){
    const user =  await Usuario.findAll();
    return res.json({ message: 'success', response : user});
}

async function singIn(req, res = response) {
    
    const {user, password} = req.body;
    const reslogin = await Usuario.findOne({ 
         attributes: ['nombre','apellido','usuario'], 
         where: { usuario : user, contrasena : password }
     });
    return res.json({ message: 'success',  response : reslogin});
}

module.exports = {
     getUser,
     singIn
}