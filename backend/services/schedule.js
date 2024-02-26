const { Schedule } = require('../database/models');
const { Route, Terminal } = require('../database/models');
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
  originTerminal,
  destinationTerminal,
  date
) => {
  // Convert date string to a Date object
  const searchDate = new Date(date);
  // Determine the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const dayOfWeek = searchDate.getDay();
  console.log(dayOfWeek);
  // Get the terminalIds
  const originTerminalObject = await Terminal.findOne({
    where: { terminalName: originTerminal }
  });
  const destinationTerminalObject = await Terminal.findOne({
    where: { terminalName: destinationTerminal }
  });

  const originId = originTerminalObject.id;
  const destinationId = destinationTerminalObject.id;
  // Get schedules for a given route and a given day of the week.
  const schedules = await Schedule.findAll({
    include: [
      {
        model: Route,
        as: 'route',
        where: {
          // Filter by origin and destination terminals
          originId: originId,
          destinationId: destinationId
        }
      }
    ],
    where: {
      // Filter by day of the week using helper function
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
