const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../database/database");

class Usuario extends Model {}


Usuario.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    idtipo: { type: DataTypes.INTEGER },
    nombre: { type: DataTypes.STRING },
    apellido: { type: DataTypes.STRING },
    usuario: { type: DataTypes.STRING },
    descripcion: { type: DataTypes.TEXT },
    tipodocumento: { type: DataTypes.STRING },
    documento: { type: DataTypes.STRING },
    celular: { type: DataTypes.STRING },
    correo: { type: DataTypes.STRING },
    contrasena: { type: DataTypes.STRING },
    estado: { type: DataTypes.BOOLEAN },
  },
  { sequelize, modelName: "usuario", timestamps: false, tableName:'usuario' }
);





/*
Usuario.belongsTo(TipoUsuario, {
    foreignKey: 'idtipo',
    sourceKey : 'id'
});

*/


module.exports = { Usuario };
