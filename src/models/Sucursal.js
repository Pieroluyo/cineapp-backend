const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../database/database");
const { Sala } = require("./Sala");


class Sucursal extends Model {}

Sucursal.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    idciudad: { type: DataTypes.INTEGER },
    nombre: { type: DataTypes.STRING },
    descripcion: { type: DataTypes.TEXT },
    direccion: { type: DataTypes.STRING },
    estado: { type: DataTypes.BOOLEAN },
    urlimagen: {type : DataTypes.STRING}
  },
  { sequelize, modelName: "sucursal", timestamps: false, tableName:'sucursal' }
);



/*
Sala.belongsTo(Sucursal, {
    foreignKey: 'idsucursal',
    sourceKey : 'id'
});

Sucursal.hasMany(Sala, {
    foreignKey: 'idsucursal',
    sourceKey : 'id'
});*/


module.exports = { Sucursal };
