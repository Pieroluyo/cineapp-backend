const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../database/database");
const { Pelicula } = require("./Pelicula");

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



/*
Pelicula.belongsTo(TipoPelicula, {
    foreignKey: 'idtipopelicula',
    sourceKey : 'id'
});

TipoPelicula.hasMany(Pelicula, {
    foreignKey: 'idtipopelicula',
    sourceKey : 'id'
});*/


module.exports = { TipoPelicula };
