const { Router } = require("express");
const { GetSalaAsientos, getSucursal } = require("../controllers/cine.controller");
const rutaCine = Router();

rutaCine.get('/asiento/:idsala', GetSalaAsientos);
rutaCine.get('/sucursal', getSucursal);

module.exports = rutaCine;