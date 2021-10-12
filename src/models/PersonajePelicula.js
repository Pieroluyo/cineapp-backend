const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../database/database");
const { Pelicula } = require("./Pelicula");
const { Personaje } = require("./Personaje");
const { TipoPersonaje } = require("./TipoPersonaje");

class PersonajePelicula extends Model {}

PersonajePelicula.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    idpersonaje: {
      type: DataTypes.INTEGER,
      references: {
        model: Personaje,
        key: "id",
      },
    },
    idpelicula: {
      type: DataTypes.INTEGER,
      references: {
        model: Pelicula,
        key: "id",
      },
    },
    idtipo: {
      type: DataTypes.INTEGER,
      references: {
        model: TipoPersonaje,
        key: "id",
      },
    },
    estado: { type: DataTypes.BOOLEAN },
  },
  {
    sequelize,
    tableName: "personajepelicula",
    modelName: "personajepelicula",
    timestamps: false,
  }
);

//X personajes 

PersonajePelicula.belongsTo(Personaje,{
  foreignKey : 'idpersonaje'
});

Personaje.hasMany(PersonajePelicula, {
  foreignKey : 'idpersonaje'
});


//X tipo
PersonajePelicula.belongsTo(TipoPersonaje,{
    foreignKey : 'idtipo'
});

TipoPersonaje.hasMany(PersonajePelicula,{
    foreignKey : 'idtipo'
});

// X pelicula
PersonajePelicula.belongsTo(Pelicula,{
  foreignKey : 'idpelicula'
});

Pelicula.hasMany(PersonajePelicula, {
  foreignKey : 'idpelicula'
});

module.exports = {
  PersonajePelicula
}