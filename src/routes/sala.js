const { Router } = require("express");
const { getSala } = require("../controllers/sala.controller");

const rutaSala = Router();

rutaSala.get('/salas', getSala);


module.exports = rutaSala;