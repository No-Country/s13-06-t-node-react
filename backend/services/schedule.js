const { Schedule, sequelize } = require('../database/models');
const { Route, Terminal, City } = require('../database/models');
const { getDayName } = require('../helpers/getDayName');

// Obtener todos los horarios
const getAll = async () => {
  return await Schedule.findAll({ include: { all: true, nested: true } });
};

// Obtener un horario por su id
const getById = async (id) => {
  const schedule = await Schedule.findByPk(id);
  return schedule;
};

// Obtener un horario según origen-destino
const getAvailableSchedules = async (
  originCityName,
  destinationCityName,
  date
) => {
  // Convert date string to a Date object
  const searchDate = new Date(date);
  // Determine the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const dayOfWeek = searchDate.getDay();
  // Get the terminals for origin city.
  const originTerminals = await Terminal.findAll({
    include: [
      {
        model: City,
        as: 'city',
        where: {
          // Filter by origin and destination terminals
          name: originCityName
        }
      }
    ]
  });
  // get the terminals for destination city
  const destinationTerminals = await Terminal.findAll({
    include: [
      {
        model: City,
        as: 'city',
        where: {
          // Filter by origin and destination terminals
          name: destinationCityName
        }
      }
    ]
  });

  // Get all routes with origin and destination terminal IDs
  const routes = await Route.findAll({
    where: {
      originId: originTerminals.map((term) => term.id),
      destinationId: destinationTerminals.map((term) => term.id)
    }
  });

  // Extract route IDs from the found routes
  const routeIds = routes.map((route) => route.id);

  // Get schedules for the extracted route IDs and given day of the week
  const schedules = await Schedule.findAll({
    where: {
      routeId: routeIds,
      day: getDayName(dayOfWeek)
    }
  });
  return schedules;
};

// Crear un horario
const create = async (schedule) => {
  return await Schedule.create(schedule);
};

// Actualizar un horario
const update = async (id, schedule) => {
  return await Schedule.update(schedule, {
    where: { id },
    returning: true,
    plain: true
  });
};

// Eliminar un horario
const remove = async (id) => {
  return await Schedule.destroy({ where: { id } });
};

module.exports = {
  getAll,
  getById,
  getAvailableSchedules,
  create,
  update,
  remove
};
