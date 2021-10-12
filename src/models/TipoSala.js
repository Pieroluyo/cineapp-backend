const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../database/database");

class TipoSala extends Model {}

TipoSala.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nombre: { type: DataTypes.STRING },
    descripcion: { type: DataTypes.STRING },
    estado: { type: DataTypes.BOOLEAN },
  },
  { sequelize, modelName: "tiposala", timestamps: false, tableName : 'tiposala'}
);

module.exports = { TipoSala };
