const { Router } = require("express");
const { getPelicula, getPeliculaPortada } = require("../controllers/pelicula.controller");



const rutaPelicula = Router();

rutaPelicula.get('/peliculas', getPelicula);
rutaPelicula.get('/peliculas/portada', getPeliculaPortada);



module.exports = rutaPelicula;