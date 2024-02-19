'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Terminal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Terminal.belongsTo(models.City, {
        as: 'city',
        foreignKey: 'cityId',
        onDelete: 'CASCADE'
      }),
        Terminal.hasMany(models.Route, {
          as: 'routes',
          foreignKey: 'originId',
          onDelete: 'CASCADE'
        }),
        Terminal.hasMany(models.Route, {
          as: 'routes',
          foreignKey: 'destinationId',
          onDelete: 'CASCADE'
        });
    }
  }
  Terminal.init(
    {
      lat: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      lon: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      cityId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'City',
          key: 'id'
        }
      },
      terminalName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      terminalCode: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Terminal'
    }
  );
  return Terminal;
};
