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
      Amenity.belongsToMany(models.Vehicle, {
        through: 'VehicleAmenity',
        foreignKey: 'amenityId',
        as: 'vehicles',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  }
  Amenity.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      }
    },
    {
      sequelize,
      modelName: 'Amenity',
      timestamps: false
    }
  );
  return Amenity;
};
