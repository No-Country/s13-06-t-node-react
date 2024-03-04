const { catchAsync } = require('../helpers/catchAsync');
const { endpointResponse } = require('../helpers/success');
const ReservationService = require('../services/reservation');
const { ErrorObject } = require('../helpers/error');

module.exports = {
  getAll: catchAsync(async (req, res) => {
    try {
      const reservations = await ReservationService.getAll();
      if (reservations.length === 0) {
        throw new ErrorObject('No se encontraron reservas', 404);
      }

      endpointResponse({
        res,
        status: 'success',
        message: 'Reservas encontradas correctamente!',
        body: { reservations }
      });
    } catch (error) {
      endpointResponse({
        res,
        status: error.status || 'error',
        code: error.statusCode || 500,
        message: error.message || 'No se pudieron obtener las reservas.'
      });
    }
  }),

  getById: catchAsync(async (req, res) => {
    try {
      const { id } = req.params;
      const reservation = await ReservationService.getById(id);
      if (!reservation) {
        throw new ErrorObject('Reserva no encontrada', 404);
      }

      endpointResponse({
        res,
        status: 'success',
        message: 'Reserva encontrada correctamente!',
        body: { reservation }
      });
    } catch (error) {
      endpointResponse({
        res,
        status: error.status || 'error',
        code: error.statusCode || 500,
        message: error.message || 'No se pudo obtener la reserva.'
      });
    }
  }),

  getByEmailAndDate: catchAsync(async (req, res) => {
    try {
      const { email, dateReservation } = req.query;
      const reservation = await ReservationService.getByEmailAndDate(
        email,
        dateReservation
      );
      if (!reservation) {
        throw new ErrorObject('Reserva no encontrada', 404);
      }

      endpointResponse({
        res,
        status: 'success',
        message: 'Reserva encontrada correctamente!',
        body: { reservation }
      });
    } catch (error) {
      endpointResponse({
        res,
        status: error.status || 'error',
        code: error.statusCode || 500,
        message: error.message || 'No se pudo obtener la reserva.'
      });
    }
  }),

  getByUser: catchAsync(async (req, res) => {
    try {
      const { userClientId } = req.params;
      const reservations = await ReservationService.getByUser(userClientId);
      if (reservations.length === 0) {
        throw new ErrorObject('No se encontraron reservas', 404);
      }

      endpointResponse({
        res,
        status: 'success',
        message: 'Reservas encontradas correctamente!',
        body: { reservations }
      });
    } catch (error) {
      endpointResponse({
        res,
        status: error.status || 'error',
        code: error.statusCode || 500,
        message: error.message || 'No se pudieron obtener las reservas.'
      });
    }
  }),

  create: catchAsync(async (req, res) => {
    try {
      const { passengers, ...reservation } = req.body;

      const newReservation = await ReservationService.create(
        reservation,
        passengers
      );

      endpointResponse({
        res,
        status: 'success',
        message: 'Reserva creada correctamente!',
        body: { reservation: newReservation }
      });
    } catch (error) {
      endpointResponse({
        res,
        status: error.status || 'error',
        code: error.statusCode || 500,
        message: error || 'No se pudo crear la reserva.'
      });
    }
  }),

  update: catchAsync(async (req, res) => {
    try {
      const { id } = req.params;
      const reservation = req.body;
      const updatedReservation = await ReservationService.update(
        id,
        reservation
      );

      endpointResponse({
        res,
        status: 'success',
        message: 'Reserva actualizada correctamente!',
        body: { reservation: updatedReservation }
      });
    } catch (error) {
      endpointResponse({
        res,
        status: error.status || 'error',
        code: error.statusCode || 500,
        message: error.message || 'No se pudo actualizar la reserva.'
      });
    }
  }),

  remove: catchAsync(async (req, res) => {
    try {
      const { id } = req.params;
      const reservation = await ReservationService.remove(id);
      if (!reservation) {
        throw new ErrorObject('Reserva no encontrada', 404);
      }

      endpointResponse({
        res,
        status: 'success',
        message: 'Reserva eliminada correctamente!'
      });
    } catch (error) {
      endpointResponse({
        res,
        status: error.status || 'error',
        code: error.statusCode || 500,
        message: error.message || 'No se pudo eliminar la reserva.'
      });
    }
  })
};
