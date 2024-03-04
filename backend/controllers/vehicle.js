const VehicleService = require('../services/vehicle');
const { catchAsync } = require('../helpers/catchAsync');
const { endpointResponse } = require('../helpers/success');
const { ErrorObject } = require('../helpers/error');

module.exports = {
  // Get all vehicles with amenities
  getVehiclesAmenities: catchAsync(async (_, res) => {
    try {
      const vehicles = await VehicleService.getVehiclesAmenities();

      if (!vehicles) {
        throw new ErrorObject('No se pudieron obtener los vehiculos!', 500);
      }

      endpointResponse({
        res,
        status: 'success',
        message: 'Vehiculos obtenidos con éxito!',
        body: { vehicles: vehicles }
      });
    } catch (error) {
      endpointResponse({
        res,
        status: error.status || 'error',
        code: error.statusCode || 500,
        message: error.message || 'Error al obtener los vehiculos!'
      });
    }
  }),

  // Get vehicle and amenity by id
  getVehicleAmenityById: catchAsync(async (req, res) => {
    try {
      const { id } = req.params;
      const vehicle = await VehicleService.getVehicleById(id);

      if (!vehicle) {
        throw new ErrorObject('No se encontro ningún vehiculo', 404);
      }

      const vehicleAmenity = await VehicleService.getVehicleAmenityById(id);

      endpointResponse({
        res,
        status: 'success',
        message: 'Vehiculo obtenido con éxito!',
        body: vehicleAmenity
      });
    } catch (error) {
      endpointResponse({
        res,
        status: error.status || 'error',
        code: error.statusCode || 500,
        message: error.message || 'Error al obtener el vehiculo!'
      });
    }
  }),

  // Get vehicle and amenity by plate
  getVehicleAmenityByPlate: catchAsync(async (req, res) => {
    try {
      const { plate } = req.params;
      const vehicle = await VehicleService.getVehicleAmenityByPlate(plate);

      if (!vehicle) {
        throw new ErrorObject(
          `No se encontro ningún vehiculo con la patente: ${plate}`,
          404
        );
      }

      endpointResponse({
        res,
        status: 'success',
        message: 'Vehiculo obtenido con éxito!',
        body: vehicle
      });
    } catch (error) {
      endpointResponse({
        res,
        status: error.status || 'error',
        code: error.statusCode || 500,
        message: error.message || 'Error al obtener el vehiculo!'
      });
    }
  }),

  // Get vehicle by plate
  getVehicleByPlate: catchAsync(async (req, res) => {
    try {
      const { plate } = req.params;
      const vehicle = await VehicleService.getVehicleByPlate(plate);

      if (!vehicle) {
        throw new ErrorObject(
          `No se encontro ningún vehiculo con la patente: ${plate}`,
          404
        );
      }

      endpointResponse({
        res,
        status: 'success',
        message: 'Vehiculo obtenido con éxito!',
        body: vehicle
      });
    } catch (error) {
      endpointResponse({
        res,
        status: error.status || 'error',
        code: error.statusCode || 500,
        message: error.message || 'Error al obtener el vehiculo!'
      });
    }
  }),

  // Create vehicle
  createVehicle: catchAsync(async (req, res) => {
    try {
      const { number, plate, totalSeats } = req.body;
      const existVehicle = await VehicleService.getVehicleByPlate(plate);

      if (existVehicle) {
        throw new ErrorObject(
          `Patente ${plate.toUpperCase()}, el vehiculo ya existe!`,
          409
        );
      }

      const vehicle = {
        number,
        plate,
        totalSeats
      };

      console.log('VEHICLE', vehicle);

      const newVehicle = await VehicleService.createVehicle(vehicle);

      if (!newVehicle) {
        throw new Error('No se pudo agregar el vehiculo!');
      }

      endpointResponse({
        res,
        status: 201,
        message: 'Vehiculo añadido con éxito!',
        body: newVehicle
      });
    } catch (error) {
      endpointResponse({
        res,
        status: error.status || 'error',
        code: error.statusCode || 500,
        message: error.message || 'No se pudo agregar el vehiculo!'
      });
    }
  }),

  // Create vehicle and associate amenities
  createVehicleAmenity: catchAsync(async (req, res) => {
    try {
      const { number, plate, totalSeats, amenities } = req.body;

      const existVehicle = await VehicleService.getVehicleByPlate(plate);

      if (existVehicle) {
        throw new ErrorObject(
          `Patente ${plate.toUpperCase()}, el vehiculo ya existe!`,
          409
        );
      }

      const newVehicle = await VehicleService.createVehicle({
        number,
        plate,
        totalSeats
      });

      if (!newVehicle) {
        throw new Error('No se pudo agregar el vehiculo!');
      }

      if (amenities && amenities.length > 0) {
        // Convert amenity IDs to objects before associating
        const amenityObjects = amenities.map((id) => ({ id }));
        await VehicleService.createVehicleAmenity(
          newVehicle.id,
          amenityObjects
        );
      }

      endpointResponse({
        res,
        status: 201,
        message: 'Vehiculo añadido con éxito!',
        body: newVehicle
      });
    } catch (error) {
      endpointResponse({
        res,
        status: error.status || 'error',
        code: error.statusCode || 500,
        message: error.message || 'No se pudo agregar el vehiculo!'
      });
    }
  }),

  /* updateVehicle: catchAsync(async (req, res) => {
    try {
      const { id } = req.params;
      const vehicle = req.body;

      const updateVehicle = await VehicleService.updateVehicle(id, vehicle);
      if (!updateVehicle) {
        throw new ErrorObject('No se pudo actualizar el vehiculo!', 500);
      }

      endpointResponse({
        res,
        status: 'success',
        message: 'Vehiculo actualizado con éxito!',
        body: updateVehicle
      });
    } catch (error) {
      endpointResponse({
        res,
        status: error.status || 'error',
        code: error.statusCode || 500,
        message: error.message || 'Error al actualizar el vehiculo!'
      });
    }
  }), */

  // Update Vehicle Amenity
  updateVehicleAmenity: catchAsync(async (req, res) => {
    try {
      const { id } = req.params;
      const { number, plate, totalSeats, amenities } = req.body;

      // Validar la existencia del vehículo (opcional)
      const existingVehicle = await VehicleService.getVehicleById(id);
      if (!existingVehicle) {
        throw new ErrorObject(`El vehiculo no existe!`, 409);
      }

      const updatedVehicle = await VehicleService.updateVehicleAmenity(
        id,
        { number, plate, totalSeats },
        amenities
      );

      endpointResponse({
        res,
        status: 200,
        message: 'Vehículo actualizado exitosamente!',
        body: updatedVehicle
      });
    } catch (error) {
      // Manejar errores
      endpointResponse({
        res,
        status: error.status || 500,
        message: error.message || 'Error al actualizar el vehículo'
      });
    }
  }),

  /* deleteVehicle: catchAsync(async (req, res) => {
    try {
      const { id } = req.params;

      await VehicleService.deleteVehicle(id);

      endpointResponse({
        res,
        status: 'success',
        message: 'Vehiculo eliminado con éxito!'
      });
    } catch (error) {
      endpointResponse({
        res,
        status: error.status || 'error',
        code: error.statusCode || 500,
        message: error.message || 'Error al eliminar el vehiculo!'
      });
    }
  }) */

  deleteVehicleAmenity: catchAsync(async (req, res) => {
    try {
      const { id } = req.params;
      const existingVehicle = await VehicleService.getVehicleById(id);
      if (!existingVehicle) {
        throw new ErrorObject(`El vehiculo no existe!`, 404);
      }

      await VehicleService.deleteVehicleAmenity(id);

      endpointResponse({
        res,
        status: 'success',
        message: 'Vehiculo eliminado con éxito!'
      });
    } catch (error) {
      endpointResponse({
        res,
        status: error.status || 'error',
        code: error.statusCode || 500,
        message: error.message || 'Error al eliminar el vehiculo!'
      });
    }
  })
};
