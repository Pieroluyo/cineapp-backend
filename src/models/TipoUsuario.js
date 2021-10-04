const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../database/database");
const { Usuario } = require("./Usuario");

class TipoUsuario extends Model {}

TipoUsuario.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nombre: { type: DataTypes.STRING },
    descripcion: { type: DataTypes.TEXT },
    estado: { type: DataTypes.BOOLEAN },
  },
  { sequelize,
    modelName: "tipousuario",
    timestamps: false,
    tableName : 'tipousuario'
  }
);


// muchos usuarios tienen un tipo


Usuario.belongsTo(TipoUsuario, {
    foreignKey: 'idtipo',
    sourceKey : 'id'
});

// un tipo muchas tareas

TipoUsuario.hasMany(Usuario, {
    foreignKey: 'idtipo',
    sourceKey : 'id'
});




module.exports = {
  TipoUsuario,
};
