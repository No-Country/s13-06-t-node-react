const {
  getCities: getCitiesService,
  getCityById: getCityByIdService,
  createCity: createCityService,
  updateCity: updateCityService,
  deleteCity: deleteCityService,
  checkCityExistsByName
} = require('../services/city');
const { catchAsync } = require('../helpers/catchAsync');
const { endpointResponse } = require('../helpers/success');
const { ErrorObject } = require('../helpers/error');

const getAll = catchAsync(async (_, res) => {
  try {
    const cities = await getCitiesService();

    if (!cities) {
      throw new ErrorObject('No se pudieron obtener las ciudades!', 500);
    }

    endpointResponse({
      res,
      status: 'success',
      message: 'Ciudades obtenidas con éxito!',
      body: { cities }
    });
  } catch (error) {
    endpointResponse({
      res,
      status: error.status || 'error',
      code: error.statusCode || 500,
      message: error.message || 'Error al obtener las ciudades!'
    });
  }
});

const getCityById = catchAsync(async (req, res) => {
  try {
    const { id } = req.params;
    const city = await getCityByIdService(id);

    if (!city) {
      throw new ErrorObject(`No se encontró ciudad con el ID: ${id}`, 404);
    }

    endpointResponse({
      res,
      status: 'success',
      message: 'Ciudad obtenida con éxito!',
      body: city
    });
  } catch (error) {
    endpointResponse({
      res,
      status: error.status || 'error',
      code: error.statusCode || 500,
      message: error.message || 'Error al obtener la ciudad!'
    });
  }
});

const createCity = catchAsync(async (req, res) => {
  try {
    const { name } = req.body;

    const cityExists = await checkCityExistsByName(name);

    if (cityExists) {
      throw new ErrorObject(`Ya existe una ciudad con el nombre: ${name}`, 409);
    }

    const newCity = await createCityService(name);

    if (!newCity) {
      throw new ErrorObject('No se pudo crear la ciudad!', 500);
    }

    endpointResponse({
      res,
      status: 'success',
      message: 'Ciudad creada con éxito!',
      body: newCity
    });
  } catch (error) {
    endpointResponse({
      res,
      status: error.status || 'error',
      code: error.statusCode || 500,
      message: error.message || 'Error al crear la ciudad!'
    });
  }
});

const updateCity = catchAsync(async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const cityExists = await checkCityExistsByName(name);

    if (cityExists) {
      throw new ErrorObject(`Ya existe una ciudad con el nombre: ${name}`, 409);
    }

    const updatedCity = await updateCityService(id, name);

    if (!updatedCity) {
      throw new ErrorObject('No se pudo actualizar la ciudad!', 500);
    }

    endpointResponse({
      res,
      status: 'success',
      message: 'Ciudad actualizada con éxito!',
      body: updatedCity
    });
  } catch (error) {
    endpointResponse({
      res,
      status: error.status || 'error',
      code: error.statusCode || 500,
      message: error.message || 'Error al actualizar la ciudad!'
    });
  }
});

const deleteCity = catchAsync(async (req, res) => {
  try {
    const { id } = req.params;

    await deleteCityService(id);

    endpointResponse({
      res,
      status: 'success',
      message: 'Ciudad eliminada con éxito!'
    });
  } catch (error) {
    endpointResponse({
      res,
      status: error.status || 'error',
      code: error.statusCode || 500,
      message: error.message || 'Error al eliminar la ciudad!'
    });
  }
});

module.exports = {
  getAll,
  getCityById,
  createCity,
  updateCity,
  deleteCity
};
