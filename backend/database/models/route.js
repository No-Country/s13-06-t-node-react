'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Route extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Route.belongsTo(models.Terminal, {
        as: 'originTerminal',
        foreignKey: 'originId',
        onDelete: 'CASCADE'
      }),
        Route.belongsTo(models.Terminal, {
          as: 'destinationTerminal',
          foreignKey: 'destinationId',
          onDelete: 'CASCADE'
        }),
        Route.hasMany(models.Schedule, {
          as: 'schedules',
          foreignKey: 'routeId',
          onDelete: 'CASCADE'
        });
    }
  }
  Route.init(
    {
      originId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Terminal',
          key: 'id'
        }
      },
      destinationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Terminal',
          key: 'id'
        }
      },
      duration: {
        type: DataTypes.TIME,
        allowNull: false
      },
      distance: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Route',
      timestamps: false
    }
  );
  return Route;
};
