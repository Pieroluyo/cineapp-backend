const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../database/database");

class TipoPelicula extends Model {}

TipoPelicula.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nombre: { type: DataTypes.STRING },
    descripcion: { type: DataTypes.STRING },
    estado: { type: DataTypes.BOOLEAN },
  },
  { sequelize, modelName: "tipopelicula", timestamps: false, tableName : 'tipopelicula'}
);

module.exports = { TipoPelicula };
