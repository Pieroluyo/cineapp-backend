const { response } = require("express");
const { Pelicula } = require("../models/Pelicula");
const { TipoPelicula } = require("../models/TipoPelicula");
const { PersonajePelicula } = require("../models/PersonajePelicula");
const { Personaje } = require("../models/Personaje");
const { TipoPersonaje } = require("../models/TipoPersonaje");
const { Sucursal } = require("../models/Sucursal");
const { Horario } = require("../models/Horario");
const getPeliculas = async (req, res = response) => {
  const pelicula = await Pelicula.findAll({
    where: {
      estado: true,
    },
  });
  return res.json({ message: "success", response: pelicula });
};

const getPeliculaDetalle = async (req, res = response) => {
  const { nombre_slug } = req.params;

  const peliculadetalle = await Pelicula.findOne({
    include: [
      {
        model: TipoPelicula,
        required: true, // inner join
        attributes: ["id", "nombre"],
      },
      {
        model: PersonajePelicula,
        attributes: ["estado"],
        include: [
          {
            model: Personaje,
            attributes: ["nombre", "imagen"],
          },
          {
            model: TipoPersonaje,
            attributes: ["nombre"],
          },
        ],
        required: true,
      },
    ],
    attributes: ["nombre", "descripcion", "sinopsis", "duracion", "trailer"],
    where: {
      nombre_slug: nombre_slug,
    },
  });
  return res.json({ message: "success", response: peliculadetalle });
};

const getPeliculaPortada = async (req, res = response) => {
  const portada = await Pelicula.findAll({
    where: {
      estado: true,
      home_portada: true,
    },
    attributes: ["imagen_portada", "nombre", "nombre2", "descripcion_portada"],
  });
  return res.json({ message: "succes", response: portada });
};

const getTipoPelicula = async (req, res = response) => {
  const tipopelicula = await TipoPelicula.findAll({
    include: {
      model: Pelicula,
      attributes: [
        "id",
        "idtipopelicula",
        "nombre",
        "descripcion",
        "sinopsis",
        "duracion",
        "trailer",
        "estreno",
      ],
      where: {
        estado: true,
      },
      order: ["estreno", "DESC"],
    },
    attributes: ["nombre"],
    where: {
      estado: true,
    },
  });

  return res.json({
    message: "success",
    response: tipopelicula,
  });
};

const getPeliculasSucursal = async (req, res = response) => {
  const { idsucursal } = req.params;

  try {
    const peliculasSucusal = await Sucursal.findOne({
      where: { id: idsucursal },
      include: {
        model: Horario,
        require: true,
        where: { idsucursal: idsucursal },
        include: {
          model: Pelicula,
        },
      },
    });

    if (peliculasSucusal) {
      res.json({
        ok: true,
        message: "success",
        response: peliculasSucusal,
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
  getPeliculas,
  getPeliculaPortada,
  getTipoPelicula,
  getPeliculaDetalle,
  getPeliculasSucursal,
};
