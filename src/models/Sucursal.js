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
    idciudad: { type: DataTypes.INTEGER },
    nombre: { type: DataTypes.STRING },
    descripcion: { type: DataTypes.TEXT },
    direccion: { type: DataTypes.STRING },
    urlmapa: { type: DataTypes.INTEGER },
    estado: { type: DataTypes.BOOLEAN }
  },
  { sequelize, modelName: "sucursal", timestamps: false, tableName:'sucursal' }
);


Ciudad.belongsTo(Sucursal, {
    foreignKey: 'idciudad',
    sourceKey : 'id'
});

Sucursal.hasMany(Ciudad, {
    foreignKey: 'idciudad',
    sourceKey : 'id'
});



module.exports = { Sucursal };
