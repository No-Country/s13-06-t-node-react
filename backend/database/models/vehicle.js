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
      Vehicle.hasMany(models.Amenity, {
        foreignKey: 'idVehicle',
        as: 'amenities',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      Vehicle.hasMany(models.Amenity, {
        foreignKey: 'idVehicle',
        as: 'schedules',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  }
  Vehicle.init(
    {
      number: {
        type: DataTypes.INTEGER,
        allowNull: false
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
      modelName: 'Vehicle'
    }
  );
  return Vehicle;
};
