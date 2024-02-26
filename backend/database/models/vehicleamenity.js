'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VehicleAmenity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      VehicleAmenity.belongsTo(models.Vehicle, {
        foreignKey: 'vehicleId',
        as: 'vehicle',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });

      VehicleAmenity.belongsTo(models.Amenity, {
        foreignKey: 'amenityId',
        as: 'amenity',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  }
  VehicleAmenity.init(
    {
      vehicleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Vehicle',
          key: 'id'
        }
      },
      amenityId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Amenity',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'VehicleAmenity',
      timestamps: false
    }
  );
  return VehicleAmenity;
};
