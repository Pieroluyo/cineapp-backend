const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../database/database");
const { Sala } = require("./Sala");

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



Sala.belongsTo(TipoSala, {
    foreignKey: 'idtipo',
    sourceKey : 'id'
});

TipoSala.hasMany(Pelicula, {
    foreignKey: 'idtipo',
    sourceKey : 'id'
});




module.exports = { TipoSala };
