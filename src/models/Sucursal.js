const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../database/database");
const { Ciudad } = require("./Ciudad");

class Sucursal extends Model {}

Sucursal.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    idciudad: {
      type: DataTypes.INTEGER,
      references: {
        model: Ciudad,
        key: "id",
      },
    },
    nombre: { type: DataTypes.STRING },
    descripcion: { type: DataTypes.TEXT },
    direccion: { type: DataTypes.STRING },
    estado: { type: DataTypes.BOOLEAN },
    urlimagen: { type: DataTypes.STRING },
  },
  { sequelize, modelName: "sucursal", timestamps: false, tableName: "sucursal" }
);


Sucursal.belongsTo(Ciudad, {
    foreignKey: 'idciudad',
});

Ciudad.hasMany(Sucursal, {
    foreignKey: 'idciudad',
});


module.exports = { Sucursal };
