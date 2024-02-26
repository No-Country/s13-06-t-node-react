'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vehicle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Vehicle.belongsToMany(models.Amenity, {
        through: 'VehicleAmenity',
        foreignKey: 'vehicleId',
        as: 'amenities',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });

      Vehicle.hasMany(models.Schedule, {
        foreignKey: 'vehicleId',
        as: 'schedules',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });

      // Association whit Seats
      /* Vehicle.hasMany(models.Seat, {
        foreignKey: 'vehicleId',
        as: 'seats',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }); */
    }
  }
  Vehicle.init(
    {
      number: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
      },
      plate: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      totalSeats: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Vehicle',
      timestamps: false
    }
  );
  return Vehicle;
};
