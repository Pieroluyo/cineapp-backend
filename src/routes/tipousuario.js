const { Router } = require("express");
const { getTipoUsuario } = require("../controllers/tipoUsuario.controller");



const routertipousuario = Router();

routertipousuario.get('/tipousuario', getTipoUsuario);


module.exports = routertipousuario;
