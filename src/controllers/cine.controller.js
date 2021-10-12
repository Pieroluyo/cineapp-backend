const { response } = require("express");
const { Asiento } = require("../models/Asiento");
const { Ciudad } = require("../models/Ciudad");
const { Sala } = require("../models/Sala");
const { Sucursal } = require("../models/Sucursal");
const { TipoSala } = require("../models/TipoSala");

const GetSalaAsientos = async (req, res = response) => {
  const { idsala } = req.params;
  const salaAsientos = await Sala.findOne({
    where: {
      estado: true,
      id: idsala,
    },
    include: [
      {
        model: TipoSala,
        required: true,
        where: {
          estado: true,
        },
        attributes: ["nombre", "descripcion"],
      },
      {
        model: Asiento,
        required: true,
        order: ["fila", "ASC"],
        where: {
          estado: true,
        },
        attributes: ["id", "nombre", "fila", "descripcion"],
      },
    ],
  });

  return res.json({ message: "success", response: salaAsientos });
};

const getSucursal = async (req, res = response) => {
    const sucursal = await Sucursal.findAll({
        where : {
            estado : true,
        },
        attributes : [ 
            'nombre',
            'descripcion',
            'direccion',
            'urlimagen'
         ]
    })
    return res.json({ message: 'succes', response: sucursal})
}

const getSucursalCiudad = async (req, res = response) => {
    const { idciudad } = req.params;
    const ciudadsucursal = await Ciudad.findAll({
        where : {
            estado : true,
            idciudad : idciudad
        },
        include : {
            model : Sucursal,
            where : {
                estado : true
            }
        }
    })
    return res.json({ message: 'succes', response: ciudadsucursal})
}

module.exports = {
  GetSalaAsientos,
  getSucursalCiudad,
  getSucursal
};
