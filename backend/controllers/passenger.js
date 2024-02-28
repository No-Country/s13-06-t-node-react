const PassengerService = require('../services/passenger');
const { catchAsync } = require('../helpers/catchAsync');
const { ErrorObject } = require('../helpers/error');
const { endpointResponse } = require('../helpers/success');

module.exports = {
  getAll: catchAsync(async (req, res) => {
    try {
      const passengers = await PassengerService.getAll();

      if (!passengers) {
        throw new ErrorObject('No se pudieron obtener los pasajeros.', 500);
      }

      endpointResponse({
        res,
        status: 'success',
        message: 'Pasajeros obtenidos con éxito!',
        body: { passengers: passengers }
      });
    } catch (error) {
      endpointResponse({
        res,
        status: error.status || 'error',
        code: error.statusCode || 500,
        message: error.message || 'Error al obtener los pasajeros.'
      });
    }
  }),

  getAllByUserClientId: catchAsync(async (req, res) => {
    try {
      const { userClientId } = req.params;
      const passengers =
        await PassengerService.getAllByUserClientId(userClientId);

      if (!passengers) {
        throw new ErrorObject('No se pudieron obtener los pasajeros.', 500);
      }

      endpointResponse({
        res,
        status: 'success',
        message: 'Pasajeros obtenidos con éxito!',
        body: { passengers: passengers }
      });
    } catch (error) {
      endpointResponse({
        res,
        status: error.status || 'error',
        code: error.statusCode || 500,
        message: error.message || 'Error al obtener los pasajeros.'
      });
    }
  }),

  getById: catchAsync(async (req, res) => {
    try {
      const { id } = req.params;
      const passenger = await PassengerService.getById(id);

      if (!passenger) {
        throw new ErrorObject(
          `No se encontró ningúna ruta con el ID: ${id}`,
          404
        );
      }

      endpointResponse({
        res,
        status: 'success',
        message: 'Ruta obtenida con éxito!',
        body: passenger
      });
    } catch (error) {
      endpointResponse({
        res,
        status: error.status || 'error',
        code: error.statusCode || 500,
        message: error.message || 'Error al obtener la ruta!'
      });
    }
  }),

  create: catchAsync(async (req, res) => {
    try {
      const passenger = await PassengerService.create(req.body);

      endpointResponse({
        res,
        status: 'success',
        message: 'Pasajero creado con éxito!',
        body: passenger
      });
    } catch (error) {
      endpointResponse({
        res,
        status: error.status || 'error',
        code: error.statusCode || 500,
        message: error.message || 'Error al crear el pasajero!'
      });
    }
  }),

  update: catchAsync(async (req, res) => {
    try {
      const { id } = req.params;
      const updatedPassenger = await PassengerService.update(id, req.body);

      if (!updatedPassenger) {
        throw new ErrorObject('No se pudo actualizar el pasajero.', 500);
      }

      endpointResponse({
        res,
        status: 'success',
        message: 'Pasajero actualizado con éxito!',
        body: updatedPassenger
      });
    } catch (error) {
      endpointResponse({
        res,
        status: error.status || 'error',
        code: error.statusCode || 500,
        message: error.message || 'Error al actualizar el pasajero!'
      });
    }
  }),

  remove: catchAsync(async (req, res) => {
    try {
      const { id } = req.params;
      await PassengerService.remove(id);

      endpointResponse({
        res,
        status: 'success',
        message: 'Pasajero eliminado con éxito!'
      });
    } catch (error) {
      endpointResponse({
        res,
        status: error.status || 'error',
        code: error.statusCode || 500,
        message: error.message || 'Error al eliminar el pasajero!'
      });
    }
  })
};
