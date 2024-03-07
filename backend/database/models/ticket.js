'use strict';
const { Model, UUIDV4 } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Ticket.belongsTo(models.Reservation, {
        foreignKey: 'reservationId',
        as: 'reservation'
      });
      Ticket.belongsTo(models.Seat, {
        foreignKey: 'seatId',
        as: 'seat'
      });
      Ticket.belongsTo(models.Schedule, {
        foreignKey: 'scheduleId',
        as: 'schedule'
      });
    }
  }
  Ticket.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true
      },
      reservationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Reservation',
          key: 'id'
        }
      },
      firstName: { type: DataTypes.STRING, allowNull: false },
      lastName: { type: DataTypes.STRING, allowNull: false },
      dni: {
        type: DataTypes.STRING(15),
        allowNull: false
      },
      seatId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Seat',
          key: 'id'
        }
      },
      scheduleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Schedule',
          key: 'id'
        }
      },
      departureDate: {
        type: DataTypes.DATE,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Ticket',
      tableName: 'Tickets',
      timestamps: false
    }
  );
  return Ticket;
};
