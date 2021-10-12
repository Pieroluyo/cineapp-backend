const { response } = require("express");
const { Horario } = require("../models/Horario");
const { Pelicula } = require("../models/Pelicula");
const { Sala } = require("../models/Sala");

const getHorariosXPeliculas = async (req, res = response) => {
  const { idpelicula } = req.params;
  try {
    const horarioxpelicula = await Pelicula.findOne({
      where: {
        id: idpelicula,
      },
      include: { 
         model : Horario,
         required: true,
      }
    });
    if (horarioxpelicula) {
      res.json({
        ok: true,
        message: "success",
        response: horarioxpelicula,
      });
    } else {
      res.json({
        ok: false,
        message: "No se pudo mostrar resultado o no hay registros",
      });
    }
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: "error",
    });
  }
};

module.exports = {
  getHorariosXPeliculas,
};
