const { response } = require('express');
const { Pelicula } = require('../models/Pelicula');
const { TipoPelicula } = require('../models/TipoPelicula');

async function getPelicula(req, res = response){
    const pelicula =  await Pelicula.findAll();
    return res.json({ message: 'success', response : pelicula});
}

async function getPeliculaPortada(req, res = response) {

    const portada = await Pelicula.findAll({
        where: {
            home_portada : true
        }
        
    });

    return res.json({message: 'succes', response: portada });
}



module.exports = {
     getPelicula,
     getPeliculaPortada
}