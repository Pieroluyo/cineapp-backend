const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../database/database");

class Asiento extends Model {}


Asiento.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    idsala: { type: DataTypes.INTEGER },
    nombre: { type: DataTypes.STRING },
    fila: { type: DataTypes.INTEGER },
    descripcion: { type: DataTypes.STRING },
    estado: { type: DataTypes.BOOLEAN }
  },
  { sequelize, modelName: "asiento", timestamps: false, tableName:'asiento' }
);



module.exports = { Asiento };
