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
      Reservation.hasMany(models.Ticket, {
        foreignKey: 'reservationId',
        as: 'tickets',
        onDelete: 'CASCADE'
      });
      Reservation.belongsTo(models.Schedule, {
        foreignKey: 'scheduleId',
        as: 'schedule',
        onDelete: 'CASCADE'
      });
      Reservation.belongsTo(models.User, {
        foreignKey: 'userClientId',
        as: 'user',
        onDelete: 'CASCADE'
      });
    }
  }
  Reservation.init(
    {
      userClientId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'User',
          key: 'id'
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      totalSeats: {
        type: DataTypes.INTEGER,
        allowNull: false
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
