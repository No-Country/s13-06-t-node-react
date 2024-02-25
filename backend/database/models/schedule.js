'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Schedule.belongsTo(models.Route, {
        as: 'route',
        foreignKey: 'routeId',
        onDelete: 'CASCADE'
      });
      // Añadir cuando esté listo Vehicle
      //   Schedule.belongsTo(models.Vehicle, {
      //     as: 'vehicle',
      //     foreignKey: 'vehicleId',
      //     onDelete: 'CASCADE'
      //   });
    }
  }
  Schedule.init(
    {
      routeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Route',
          key: 'id'
        }
      },
      day: {
        type: DataTypes.ENUM('SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'),
        allowNull: false
      },
      departureTime: {
        type: DataTypes.TIME,
        allowNull: false
      },
      cost: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
      vehicleId: {
        type: DataTypes.INTEGER,
        allowNull: false
        // AÑADIR CUANDO ESTE LISTO VEHICLE
        // references: {
        //   model: 'Vehicle',
        //   key: 'id'
        // }
      }
    },
    {
      sequelize,
      modelName: 'Schedule',
      timestamps: false
    }
  );
  return Schedule;
};
