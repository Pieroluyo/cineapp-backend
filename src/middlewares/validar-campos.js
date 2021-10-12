const { response } = require('express');
const { validationResult } = require('express-validator')

const validarCampos = (req, res = response, next ) => {

    const errores = validationResult( req );

    if ( !errores.isEmpty() ) {
        return res.json({
            ok: false,
            message :  'Llenar todos los campos',
            errors: errores.mapped()
        });
    }

    next();
}

module.exports = {
    validarCampos
}