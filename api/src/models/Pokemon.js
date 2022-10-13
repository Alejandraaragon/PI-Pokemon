const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hpoints: {
      type: DataTypes.INTEGER,
      validate: {
        min: 5,
        max: 100
      }
    },
    image: {
      type: DataTypes.TEXT,
    },
    
    attack: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 100
      }
    },
    defense: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 100
      }
    },
    speed: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 100
      }
    },
    height:{
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 100
      }
    },
    weight: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 100
      }
    },
    createAtDb: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
  }, {timestamps: false
  }
  );
};
