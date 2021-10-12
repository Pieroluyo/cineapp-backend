const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../database/database");
const { Ciudad } = require("./Ciudad");

class Pais extends Model {}

Pais.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nombre: { type: DataTypes.STRING },
    descripcion: { type: DataTypes.STRING },
    estado: { type: DataTypes.BOOLEAN }
  },
  { sequelize, modelName: "pais", timestamps: false, tableName:'pais' }
);


/*
Ciudad.belongsTo(Pais, {
    foreignKey: 'idpais',
    sourceKey : 'id'
});

Pais.hasMany(Ciudad, {
    foreignKey: 'idpais',
    sourceKey : 'id'
});*/


module.exports = { Pais };
