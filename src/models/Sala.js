const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../database/database");
const { Sucursal } = require("./Sucursal");
const { TipoSala } = require("./TipoSala");

class Sala extends Model {}

Sala.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    idtiposala: { 
       type: DataTypes.INTEGER,
       references :{
        model : TipoSala,
        key : 'id'
      }

     },
    idsucursal: { 
       type: DataTypes.INTEGER,
       references :{
        model : Sucursal,
        key : 'id'
      }
    },
    nombre: { type: DataTypes.STRING },
    descripcion: { type: DataTypes.STRING },
    estado: { type: DataTypes.BOOLEAN }
  },
  { sequelize, modelName: "sala", timestamps: false, tableName:'sala' }
);

 
Sala.belongsTo(Sucursal, {
    foreignKey: 'idsucursal',
});

Sucursal.hasMany(Sala, {
    foreignKey: 'idsucursal',
});

Sala.belongsTo(TipoSala, {
  foreignKey : 'idtiposala'
});

TipoSala.hasMany(Sala, {
  foreignKey : 'idtiposala'
})

module.exports = { Sala };
