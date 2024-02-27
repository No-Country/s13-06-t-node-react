'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Seat.belongsTo(models.Vehicle, {
        as: 'vehicle',
        foreignKey: 'vehicleId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  }
  Seat.init(
    {
      number: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      seatPrice: DataTypes.FLOAT,

      vehicleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Vehicles',
          key: 'id'
        }
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false
      },

      isAvailable: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },

      blockedByUser: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null
      }
    },
    {
      sequelize,
      modelName: 'Seat',
      timestamps: false
    }
  );
  return Seat;
};
