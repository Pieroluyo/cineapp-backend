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



Pelicula.belongsTo(TipoPelicula, {
    foreignKey: 'idtipo',
    sourceKey : 'id'
});

TipoPelicula.hasMany(Pelicula, {
    foreignKey: 'idtipo',
    sourceKey : 'id'
});




module.exports = { TipoSala: TipoPelicula };