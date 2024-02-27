const ScheduleService = require('../services/schedule');
const { catchAsync } = require('../helpers/catchAsync');
const { endpointResponse } = require('../helpers/success');
const { ErrorObject } = require('../helpers/error');

module.exports = {
  getAll: catchAsync(async (req, res) => {
    try {
      // Tratamos de obtener todos los horarios
      const schedules = await ScheduleService.getAll();

      // Si no se pudieron obtener los horarios, lanzamos un error
      if (!schedules) {
        throw new ErrorObject('No se pudieron obtener los horarios.', 500);
      }

      // Si se pudieron obtener los horarios, enviamos la respuesta
      endpointResponse({
        res,
        status: 'success',
        message: 'Horarios obtenidos con éxito!',
        body: { schedules: schedules }
      });
    } catch (error) {
      // Si hubo un error, lo capturamos y lo lanzamos
      endpointResponse({
        res,
        status: error.status || 'error',
        code: error.statusCode || 500,
        message: error.message || 'Error al obtener los horarios.'
      });
    }
  }),

  getAvailableSchedules: catchAsync(async (req, res) => {
    try {
      const { originCity, destinationCity, date } = req.query;
      console.log(originCity, destinationCity, date);
      const schedules = await ScheduleService.getAvailableSchedules(
        originCity,
        destinationCity,
        date
      );

      if (!schedules || schedules.length === 0) {
        throw new ErrorObject(
          `No se encontró ningún horario para ruta con origen ${originCity} - destino ${destinationCity} para la fecha ${date}.`,
          404
        );
      }

      endpointResponse({
        res,
        status: 'success',
        message: 'Horarios obtenidos con éxito!',
        body: schedules
      });
    } catch (error) {
      endpointResponse({
        res,
        status: error.status || 'error',
        code: error.statusCode || 500,
        message: error.message || 'Error al obtener los horarios!'
      });
    }
  }),

  getById: catchAsync(async (req, res) => {
    try {
      const { id } = req.params;
      const schedule = await ScheduleService.getById(id);

      if (!schedule) {
        throw new ErrorObject(
          `No se encontró ningún horario con el ID: ${id}`,
          404
        );
      }

      endpointResponse({
        res,
        status: 'success',
        message: 'Horario obtenido con éxito!',
        body: schedule
      });
    } catch (error) {
      endpointResponse({
        res,
        status: error.status || 'error',
        code: error.statusCode || 500,
        message: error.message || 'Error al obtener el horario!'
      });
    }
  }),

  create: catchAsync(async (req, res) => {
    try {
      // Obtenemos los datos del horario desde el body
      const { routeId, day, departureTime, cost, vehicleId } = req.body;

      const schedule = {
        routeId,
        day, // MON; TUE; WED; THU; FRI; SAT; SUN
        departureTime, //'22:15:00'
        cost, //45000 (ARS)
        vehicleId
      };

      // Creamos la ruta
      const newSchedule = await ScheduleService.create(schedule);

      // Si no se pudo crear el horario, lanzamos un error
      if (!newSchedule) {
        throw new Error('No se pudo añadir el horario!');
      }

      // Si se pudo crear la ruta, enviamos la respuesta
      endpointResponse({
        res,
        code: 201,
        message: 'Horario añadido con éxito!',
        body: newSchedule
      });
    } catch (error) {
      // Si hubo un error, lo capturamos y lo lanzamos
      endpointResponse({
        res,
        status: error.status || 'error',
        code: error.statusCode || 500,
        message: error.message || 'No se pudo registrar el horario!'
      });
    }
  }),

  update: catchAsync(async (req, res) => {
    try {
      const { id } = req.params;
      const schedule = req.body;

      // Actualizamos la ruta
      const updatedSchedule = await ScheduleService.update(id, schedule);

      // Si no se pudo actualizar el horario, lanzamos un error
      if (!updatedSchedule) {
        throw new ErrorObject('No se pudo actualizar el horario!', 500);
      }

      // Si se pudo actualizar la ruta, enviamos la respuesta
      endpointResponse({
        res,
        status: 'success',
        message: 'Horario actualizado con éxito!',
        body: updatedSchedule
      });
    } catch (error) {
      // Si hubo un error, lo capturamos y lo lanzamos
      endpointResponse({
        res,
        status: error.status || 'error',
        code: error.statusCode || 500,
        message: error.message || 'Error al actualizar el horario!'
      });
    }
  }),

  remove: catchAsync(async (req, res) => {
    try {
      const { id } = req.params;
      await ScheduleService.remove(id);

      // Si se pudo eliminar la ruta, enviamos la respuesta
      endpointResponse({
        res,
        status: 'success',
        message: 'Horario eliminado con éxito!'
      });
    } catch (error) {
      // Si hubo un error, lo capturamos y lo lanzamos
      endpointResponse({
        res,
        code: 500,
        message: 'Error al eliminar la ruta!'
      });
    }
  })
};
