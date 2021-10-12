const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../database/database");
const { Sala } = require("./Sala");
 
class Horario extends Model {}

Horario.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    idpelicula:{type: DataTypes.INTEGER},
    idsala: { type: DataTypes.INTEGER },
    fecha: {type: DataTypes.TIME},
    horainicio: { type: DataTypes.TIME },
    horafinal: { type: DataTypes.TIME },
  },
  { sequelize, modelName: "horario", timestamps: false, tableName : 'horario'}
);
 /*
Sala.belongsTo(Horario, {
    foreignKey: 'idsala',
    sourceKey : 'id'
});

Horario.hasMany(Sala, {
    foreignKey: 'idsala',
    sourceKey : 'id'
});
*/
module.exports = { Horario };