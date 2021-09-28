const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('actividades', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dificultad:{
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    duracion:{
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    temporada:{
      type:DataTypes.STRING(50),
      allowNull:false,
    }

  });
};