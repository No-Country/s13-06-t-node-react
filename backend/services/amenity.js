const { Amenity } = require('../database/models');

const getAmenityById = async (vehicleId) => await Amenity.findByPk(vehicleId);

module.exports = {
  getAmenityById
};
