const { Router } = require('express'); 
const { getUser, singIn, createusuario } = require('../controllers/usuario.controller');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const routerUsuario = Router();
routerUsuario.get('/usuario',getUser);
routerUsuario.post('/usuario/singin', [
    check('user', 'El Usuario es obligatorio').not().isEmpty(),
    check('password', 'El Password es obligatorio').not().isEmpty(),
    validarCampos
] ,singIn);

routerUsuario.post('/usuario/register',[
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('apellido', 'El apellido es obligatorio').not().isEmpty(),
    check('tipodocumento', 'El tipo de documento es obligatorio').not().isEmpty(),
    check('documento', 'El documento es obligatorio').not().isEmpty(),
    check('celular', 'El celular es obligatorio').not().isEmpty(),
    check('correo', 'El correo es obligatorio').not().isEmpty(),
    check('contrasena', 'la contrasena es obligatorio').not().isEmpty(),
    validarCampos
],createusuario);

module.exports = routerUsuario