const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../database/database");
const { Sucursal } = require("./Sucursal");


class Ciudad extends Model {}

Ciudad.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    idpais: { type: DataTypes.INTEGER },
    nombre: { type: DataTypes.STRING },
    descripcion: { type: DataTypes.STRING },
    estado: { type: DataTypes.BOOLEAN }
  },
  { sequelize, modelName: "ciudad", timestamps: false, tableName:'ciudad' }
);


/*

Sucursal.belongsTo(Ciudad, {
    foreignKey: 'idciudad',
    sourceKey : 'id'
});

Ciudad.hasMany(Sucursal, {
    foreignKey: 'idciudad',
    sourceKey : 'id'
});
*/
module.exports = { Ciudad };
