const { Router } = require("express");
const { getAsiento } = require("../controllers/asiento.controller");


const rutaAsiento = Router();

rutaAsiento.get('/asientos', getAsiento);


module.exports = rutaAsiento;