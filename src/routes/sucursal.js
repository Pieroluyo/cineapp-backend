const { Router } = require("express");
const { getSucursal } = require("../controllers/sucursal.controller");

const rutaSucur = Router();

rutaSucur.get('/sucursales', getSucursal);





module.exports = rutaSucur

