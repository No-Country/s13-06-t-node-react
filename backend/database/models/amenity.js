'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Amenity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Amenity.belongsTo(models.Vehicle, {
        foreignKey: 'idVehicle',
        as: 'vehicle',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  }
  Amenity.init(
    {
      idVehicle: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Vehicle',
          key: 'id'
        }
      },
      usb: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      tv: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      food: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      wifi: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      airConditioner: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    },
    {
      sequelize,
      modelName: 'Amenity'
    }
  );
  return Amenity;
};
