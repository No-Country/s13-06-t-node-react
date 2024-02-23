const VehicleService = require('../services/vehicle');
const { catchAsync } = require('../helpers/catchAsync');
const { endponintResponse } = require('../helpers/success');
const { ErrorObject } = require('../helpers/error');

module.exports = {
  getVehicles: catchAsync(async (_, res) => {
    try {
      const vehicles = await VehicleService.getVehicles();

      if (!vehicles) {
        throw new ErrorObject('No se pudieron obtener los vehiculos!', 500);
      }

      endponintResponse({
        res,
        status: 'success',
        message: 'Vehiculos obtenidos con éxito!',
        body: { vehicles: vehicles }
      });
    } catch (error) {
      endponintResponse({
        res,
        status: error.status || 'error',
        code: error.statusCode || 500,
        message: error.message || 'Error al obtener los vehiculos!'
      });
    }
  })
};
