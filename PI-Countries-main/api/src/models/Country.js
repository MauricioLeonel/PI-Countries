const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    uid: {
       type: DataTypes.STRING(3),
       primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img_bandera: {
      type: DataTypes.STRING,
      defaultValue:'https://via.placeholder.com/300',
      allowNull: false,
    },
    continente: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      defaultValue:'',
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    area:{
      type: DataTypes.DOUBLE,
      defaultValue:0,
      allowNull: false,
    }
  });
};
