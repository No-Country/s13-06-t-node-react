const AmenityServices = require('../services/amenity');
const { catchAsync } = require('../helpers/catchAsync');
const { endpointResponse } = require('../helpers/success');
const { ErrorObject } = require('../helpers/error');

module.exports = {
  // Get amenities
  getAmenities: catchAsync(async (_, res) => {
    try {
      const amenities = await AmenityServices.getAmenities();

      if (!amenities) {
        throw new ErrorObject('No se pudieron obtener los servicios!', 500);
      }

      endpointResponse({
        res,
        status: 'success',
        message: 'Servicios obtenidos con éxito!',
        body: { amenities: amenities }
      });
    } catch (error) {
      endpointResponse({
        res,
        status: error.status || 'error',
        code: error.statusCode || 500,
        message: error.message || 'Error al obtener los servicios!'
      });
    }
  }),

  // Get amenity by id
  getAmenityById: catchAsync(async (req, res) => {
    try {
      const { id } = req.params;
      const amenity = await AmenityServices.getAmenityById(id);

      if (!amenity) {
        throw new ErrorObject('No se pudo obtener el servicio!', 500);
      }

      endpointResponse({
        res,
        status: 'success',
        message: 'Servicio obtenido con éxito!',
        body: { amenity: amenity }
      });
    } catch (error) {
      endpointResponse({
        res,
        status: error.status || 'error',
        code: error.statusCode || 500,
        message: error.message || 'Error al obtener el servicio!'
      });
    }
  }),

  // Create new amenity
  createAmenity: catchAsync(async (req, res) => {
    try {
      const { name } = req.body;
      const existAmenity = await AmenityServices.getAmenityByName(name);

      if (existAmenity) {
        throw new ErrorObject(`El servicio ya existe!`, 409);
      }

      const amenity = { name };

      const newAmenity = await AmenityServices.createAmenity(amenity);

      if (!newAmenity) {
        throw new Error('No se pudo crear el servicio!');
      }

      endpointResponse({
        res,
        status: 'success',
        message: 'Servicio creado con éxito!',
        body: { amenity: amenity }
      });
    } catch (error) {
      endpointResponse({
        res,
        status: error.status || 'error',
        code: error.statusCode || 500,
        message: error.message || 'Error al crear el servicio!'
      });
    }
  }),

  // Update amenity
  updateAmenity: catchAsync(async (req, res) => {
    try {
      const { id } = req.params;
      const amenity = req.body;

      const amenityExist = await AmenityServices.getAmenityById(id);
      if (!amenityExist) {
        throw new ErrorObject('El servicio no éxiste!', 404);
      }

      const updateAmenity = await AmenityServices.updateAmenity(id, amenity);
      if (!updateAmenity) {
        throw new ErrorObject('No se pudo actualizar el servicio!', 500);
      }

      endpointResponse({
        res,
        status: 'success',
        message: 'Servicio actualizado con éxito!',
        body: updateAmenity
      });
    } catch (error) {
      endpointResponse({
        res,
        status: error.status || 'error',
        code: error.statusCode || 500,
        message: error.message || 'Error al actualizar el servicio!'
      });
    }
  }),

  // Delete amenity
  deleteAmenity: catchAsync(async (req, res) => {
    try {
      const { id } = req.params;

      const existAmenity = await AmenityServices.getAmenityById(id);
      if (!existAmenity) {
        throw new ErrorObject('El servicio no éxiste!', 404);
      }

      await AmenityServices.deleteAmenityVehicle(id);

      endpointResponse({
        res,
        status: 'success',
        message: 'Servicio eliminado con éxito!'
      });
    } catch (error) {
      endpointResponse({
        res,
        status: error.status || 'error',
        code: error.statusCode || 500,
        message: error.message || 'Error al eliminar el servicio!'
      });
    }
  })
};
