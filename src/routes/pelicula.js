const { Router } = require("express");
const { getPeliculas, getPeliculaPortada, getTipoPelicula, getPeliculaDetalle, getPeliculasSucursal } = require("../controllers/pelicula.controller");

const rutaPelicula = Router();

rutaPelicula.get('/peliculas', getPeliculas);
rutaPelicula.get('/peliculas/portada', getPeliculaPortada);
rutaPelicula.get('/peliculas/tipo', getTipoPelicula);
rutaPelicula.get('/peliculas/:nombre_slug', getPeliculaDetalle);
rutaPelicula.get('/peliculas/sucursal/:idsucursal',getPeliculasSucursal)


module.exports = rutaPelicula;