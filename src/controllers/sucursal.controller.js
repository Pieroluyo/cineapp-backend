const { response } = require('express');
const { Sucursal } = require('../models/Sucursal');


async function getSucursal(req, res = response){
    const sucu =  await Sucursal.findAll();
    return res.json({ message: 'success', response : sucu});
}




module.exports = {
     getSucursal,
}