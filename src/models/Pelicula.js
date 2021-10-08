const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../database/database");
const { Horario } = require("./Horario");

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
    sinopsis: { type: DataTypes.STRING },
    duracion: { type: DataTypes.INTEGER },
    trailer: { type: DataTypes.STRING },
    estado: { type: DataTypes.BOOLEAN },
},
  { sequelize, modelName: "pelicula", timestamps: false, tableName:'pelicula' }
);


/*
Horario.belongsTo(Pelicula, {
  foreignKey: 'idpelicula',
  sourceKey : 'id'
});

Pelicula.hasMany(Horario, {
  foreignKey: 'idpelicula',
  sourceKey : 'id'
});*/

module.exports = { Pelicula };
