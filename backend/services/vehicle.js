const { Vehicle } = require('../database/models');

// get vehicle by id
const getVehicles = async () => await Vehicle.findAll();

// get all vehicles
const getVehicleById = async (id) => await Vehicle.findByPk(id);

// create one vehicle
const createVehicle = async (number, plate, totalSeats) =>
  await Vehicle.create({
    number,
    plate,
    totalSeats
  });

// update vehicle by id
const updateVehicle = async (id, number, plate, totalSeats) =>
  await Vehicle.update(
    {
      number,
      plate,
      totalSeats
    },
    { where: { id } }
  );

// delete vehicle by id
const deleteVehicle = async (id) => await Vehicle.destroy({ where: { id } });

module.exports = {
  getVehicles,
  getVehicleById,
  createVehicle,
  updateVehicle,
  deleteVehicle
};
