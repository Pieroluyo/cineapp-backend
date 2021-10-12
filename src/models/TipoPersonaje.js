const { Model, DataTypes} = require("sequelize");
const { sequelize } = require("../database/database");

class TipoPersonaje extends Model{}

TipoPersonaje.init({
  id : {
    type : DataTypes.INTEGER,
    primaryKey : true
  },
  nombre : {
      type : DataTypes.STRING
  },
  estado : {
      type : DataTypes.BOOLEAN
  }
},{
    sequelize,
    modelName : 'tipopersonaje', 
    tableName : 'tipopersonaje',
    timestamps : false
});

module.exports = { TipoPersonaje }; 