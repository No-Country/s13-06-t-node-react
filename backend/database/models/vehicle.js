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
      Vehicle.hasMany(models.Seat, {
        foreignKey: 'vehicleId',
        as: 'seats',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
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
      timestamps: false,
      hooks: {
        afterCreate: async (vehicle) => {
          for (let i = 0; i < vehicle.totalSeats; i++) {
            try {
              const newSeat = await sequelize.models.Seat.create({
                number: i + 1,
                vehicleId: vehicle.id,
                category: 'standard',
                seatPrice: 1000,
                isAvailble: true,
                blockedByUser: null
              });
              console.log('ASIENTITOOOO', newSeat);
              if (!newSeat) {
                throw new Error(`Error al crear el asiento! ${i}`);
              }
            } catch (error) {
              console.log(error.message);
            }
          }
        }
      }
    }
  );
  return Vehicle;
};
