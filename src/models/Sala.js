const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../database/database");
// const { Asiento } = require("./Asiento");

class Sala extends Model {}

Sala.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    idtiposala: { type: DataTypes.INTEGER },
    idsucursal: { type: DataTypes.INTEGER },
    nombre: { type: DataTypes.STRING },
    descripcion: { type: DataTypes.STRING },
    estado: { type: DataTypes.BOOLEAN }
  },
  { sequelize, modelName: "sala", timestamps: false, tableName:'sala' }
);

 
// Asiento.belongsTo(Sala, {
//     foreignKey: 'idsala',
//     sourceKey : 'id'
// });

// Sala.hasMany(Asiento, {
//     foreignKey: 'idsala',
//     sourceKey : 'id'
// });

module.exports = { Sala };
