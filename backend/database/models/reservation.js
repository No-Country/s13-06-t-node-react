'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Reservation.belongsTo(models.Passenger, {
        foreignKey: 'passengerId',
        as: 'passenger',
        onDelete: 'CASCADE'
      });
      Reservation.belongsTo(models.Seat, {
        foreignKey: 'seatId',
        as: 'seat',
        onDelete: 'CASCADE'
      });
      Reservation.belongsTo(models.Schedule, {
        foreignKey: 'scheduleId',
        as: 'schedule',
        onDelete: 'CASCADE'
      });
    }
  }
  Reservation.init(
    {
      passengerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Passenger',
          key: 'id'
        }
      },
      seatId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Seat',
          key: 'id'
        }
      },
      totalPrice: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      scheduleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Schedule',
          key: 'id'
        }
      },
      dateReservation: {
        type: DataTypes.DATE,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Reservation',
      timestamps: false
    }
  );
  return Reservation;
};
