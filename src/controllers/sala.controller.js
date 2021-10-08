const { response } = require('express');
const { Sala } = require('../models/Sala');


async function getSala(req, res = response){
    const sala =  await Sala.findAll();
    return res.json({ message: 'success', response : sala});
}




module.exports = {
     getSala
}