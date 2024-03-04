'use strict';
const { Model, UUIDV4 } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BlockedSeat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      BlockedSeat.belongsTo(models.Seat, {
        as: 'seat',
        foreignKey: 'seatId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });

      BlockedSeat.belongsTo(models.Schedule, {
        as: 'schedule',
        foreignKey: 'scheduleId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  }
  BlockedSeat.init(
    {
      seatId: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        references: {
          model: 'Seats',
          key: 'id'
        }
      },
      scheduleId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Schedules',
          key: 'id'
        }
      },
      date: {
        allowNull: false,
        type: DataTypes.DATE
      }
    },
    {
      sequelize,
      modelName: 'BlockedSeat',
      timestamps: false
    }
  );
  return BlockedSeat;
};
