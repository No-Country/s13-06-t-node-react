const { Passenger } = require('../database/models');

// Obtener todos los pasajeros
const getAll = async () => {
  return await Passenger.findAll();
};

// Obtener todos los pasajeros por su userClientId
const getAllByUserClientId = async (userClientId) => {
  return await Passenger.findAll({ where: { userClientId } });
};

// Obtener todos los pasajeros con su ruta y agrupar por fecha
const getAllGroupByDate = async () => {
  return await Passenger.findAll({
    include: 'route',
    group: ['date'],
    attributes: ['date']
  });
};

// Obtener un pasajero por su id
const getById = async (id) => {
  return await Passenger.findByPk(id);
};

// Crear un pasajero
const create = async (passenger) => {
  return await Passenger.create(passenger);
};

// Actualizar un pasajero
const update = async (id, passenger) => {
  return await Passenger.update(passenger, {
    where: { id },
    returning: true,
    plain: true
  });
};

// Eliminar un pasajero
const remove = async (id) => {
  return await Passenger.destroy({ where: { id } });
};

module.exports = {
  getAll,
  getAllByUserClientId,
  getAllGroupByDate,
  getById,
  create,
  update,
  remove
};
