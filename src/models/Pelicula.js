const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../database/database");

class Pelicula extends Model {}


Pelicula.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    idtipopelicula: { type: DataTypes.INTEGER },
    nombre: { type: DataTypes.STRING },
    descripcion: { type: DataTypes.STRING },
    estado: { type: DataTypes.BOOLEAN },
    sinopsis: { type: DataTypes.STRING },
    duracion: { type: DataTypes.INTEGER },
    trailer: { type: DataTypes.STRING }
},
  { sequelize, modelName: "pelicula", timestamps: false, tableName:'pelicula' }
);


module.exports = { Pelicula };
