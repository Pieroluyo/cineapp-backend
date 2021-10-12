const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../database/database");
const { Sala } = require("./Sala");

class Asiento extends Model {}

Asiento.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    idsala: { 
      type: DataTypes.INTEGER,
      references : {
        model : Sala,
        key : 'id'
      }
    },
    nombre: { type: DataTypes.STRING },
    fila: { type: DataTypes.STRING },
    descripcion: { type: DataTypes.STRING },
    estado: { type: DataTypes.BOOLEAN }
  },
  { sequelize, modelName: "asiento", timestamps: false, tableName:'asiento' }
);


/************
 * @ por sala
 */

Asiento.belongsTo(Sala,{
  foreignKey : 'idsala'
});

Sala.hasMany(Asiento, {
  foreignKey : 'idsala'
});

module.exports = { Asiento };
