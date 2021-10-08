const { response } = require('express');
const { Asiento } = require('../models/Asiento');



async function getAsiento(req, res = response){
    const asiento =  await Asiento.findAll();
    return res.json({ message: 'success', response : asiento});
}




module.exports = {
     getAsiento
}