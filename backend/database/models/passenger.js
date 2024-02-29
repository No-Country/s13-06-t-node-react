'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Passenger extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Passenger.belongsTo(models.User, {
        foreignKey: 'userClientId',
        as: 'user',
        onDelete: 'CASCADE'
      });
    }
  }
  Passenger.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      dni: {
        type: DataTypes.STRING(15),
        allowNull: false
      },
      userClientId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'User',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Passenger'
    }
  );
  return Passenger;
};
