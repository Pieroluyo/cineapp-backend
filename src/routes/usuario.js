const { Router } = require('express'); 
const { getUser, singIn } = require('../controllers/usuario.controller');

const routerUsuario = Router();
routerUsuario.get('/usuario',getUser);
routerUsuario.post('/usuario/singin',  singIn)
module.exports = routerUsuario