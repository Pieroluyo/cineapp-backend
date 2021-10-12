const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../database/database");
const { Sala } = require("./Sala");
const { Pelicula } = require("./Pelicula");
const { Sucursal } = require("./Sucursal");

class Horario extends Model {}

Horario.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    idpelicula: {
      type: DataTypes.INTEGER,
      references: {
        model: Pelicula,
        key: "id",
      },
    },
    idsala: {
      type: DataTypes.INTEGER,
      references: {
        model: Sala,
        key: "id",
      },
    },
    fecha: { type: DataTypes.TIME },
    horainicio: { type: DataTypes.TIME },
    horafinal: { type: DataTypes.TIME },
  },
  { sequelize, modelName: "horario", timestamps: false, tableName: "horario" }
);


// sala

Horario.belongsTo(Sala, {
    foreignKey: 'idsala',
});

Sala.hasMany(Horario, {
    foreignKey: 'idsala',
});

// peliculas

Horario.belongsTo(Pelicula, {
  foreignKey: 'idpelicula',
});

Pelicula.hasMany(Horario, {
  foreignKey: 'idpelicula',
});

// sucursal

Horario.belongsTo(Sucursal, {
  foreignKey: 'idsucursal',
});

Sucursal.hasMany(Horario, {
  foreignKey: 'idsucursal',
});


module.exports = { Horario };
