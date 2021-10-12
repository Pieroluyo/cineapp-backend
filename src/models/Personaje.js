const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../database/database");
const { TipoPersonaje } = require("./TipoPersonaje");

class Personaje extends Model {}

Personaje.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  nombre : { type : DataTypes.STRING },
  estado : { type : DataTypes.BOOLEAN },
  imagen : { type : DataTypes.STRING } 
},{ sequelize,modelName : 'personaje',tableName: 'personaje',timestamps : false });

module.exports = {
    Personaje
}