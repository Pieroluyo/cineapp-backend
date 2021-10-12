const { Router } = require('express');
const { getHorariosXPeliculas } = require('../controllers/horario.controller');

const routeHorarios = Router();


routeHorarios.get('/horarios/pelicula/:idpelicula',getHorariosXPeliculas);
module.exports = routeHorarios;
