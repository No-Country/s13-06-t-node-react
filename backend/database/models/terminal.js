'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Terminal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Terminal.belongsTo(models.City, {
        as: 'city',
        foreignKey: 'cityId'
      });
    }
  }
  Terminal.init(
    {
      lat: DataTypes.FLOAT,
      lon: DataTypes.FLOAT,
      cityId: DataTypes.INTEGER,
      terminalName: DataTypes.STRING,
      terminalCode: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Terminal'
    }
  );
  return Terminal;
};
