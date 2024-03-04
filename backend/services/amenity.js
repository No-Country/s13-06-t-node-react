const { Amenity, VehicleAmenity } = require('../database/models');

// Get amenities
const getAmenities = async () => await Amenity.findAll();

// Get amenity by id
const getAmenityById = async (id) => await Amenity.findByPk(id);

// Get amenity by name
const getAmenityByName = async (name) =>
  await Amenity.findOne({ where: { name } });

// Create amenity
const createAmenity = async (newAmenity) => await Amenity.create(newAmenity);

// Update amenity
const updateAmenity = async (id, amenity) =>
  await Amenity.update(amenity, {
    where: { id },
    returning: true
  });

// delete vehicle by id
// const deleteAmenity = async (id) => await Amenity.destroy({ where: { id } });

// Delete amenity
const deleteAmenityVehicle = async (id) => {
  const amenity = await Amenity.findByPk(id);
  if (amenity) {
    await VehicleAmenity.destroy({ where: { id } });
    await Amenity.destroy({ where: { id } });
  }
  return;
};

module.exports = {
  getAmenities,
  getAmenityById,
  getAmenityByName,
  createAmenity,
  updateAmenity,
  //   deleteAmenity,
  deleteAmenityVehicle
};
