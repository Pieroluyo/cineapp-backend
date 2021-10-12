const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../database/database");
const { TipoPelicula } = require("./TipoPelicula");

class Pelicula extends Model {}

Pelicula.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    idtipopelicula: { 
      type: DataTypes.INTEGER,
      references :{
          model : TipoPelicula,
          key : 'id'
        }
    },
    nombre: { type: DataTypes.STRING },
    nombre2 : { type : DataTypes.STRING },
    nombre_slug : { type : DataTypes.STRING },
    descripcion: { type: DataTypes.STRING },
    descripcion_portada : { type: DataTypes.STRING},
    imagen : { type: DataTypes.STRING },
    imagen_portada : { type: DataTypes.STRING },
    sinopsis: { type: DataTypes.STRING },
    duracion: { type: DataTypes.INTEGER },
    trailer: { type: DataTypes.STRING },
    home_portada : { type: DataTypes.BOOLEAN },
    estado: { type: DataTypes.BOOLEAN },
    
},
  { sequelize, modelName: "pelicula", timestamps: false, tableName:'pelicula' }
);


// una pelicula tiene un tipo

Pelicula.belongsTo(TipoPelicula,{
  foreignKey : 'idtipopelicula'
});

// un tipo tiene varias peliculas
TipoPelicula.hasMany(Pelicula, {
  foreignKey : 'idtipopelicula'
});


module.exports = { Pelicula };
