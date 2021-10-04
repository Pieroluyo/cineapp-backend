const { response } = require("express");
const { TipoUsuario } = require("../models/TipoUsuario");


const getTipoUsuario = async (req, res = response) => {
    const tipoUsuario = await TipoUsuario.findAll()
    return res.json(tipoUsuario)

}


module.exports =  {getTipoUsuario }