const bcrypt = require('bcrypt');
const RouteService = require('../services/route');
const { catchAsync } = require('../helpers/catchAsync');
const { endpointResponse } = require('../helpers/success');
const { ErrorObject } = require('../helpers/error');

module.exports = {
  getAll: catchAsync(async (req, res) => {
    try {
      // Tratamos de obtener todas las rutas
      const routes = await RouteService.getAll();

      // Si no se pudieron obtener las rutas, lanzamos un error
      if (!routes) {
        throw new ErrorObject('No se pudieron obtener las rutas.', 500);
      }

      // Si se pudieron obtener las rutas, enviamos la respuesta
      endpointResponse({
        res,
        status: 'success',
        message: 'Rutas obtenidos con éxito!',
        body: { routes: routes }
      });
    } catch (error) {
      // Si hubo un error, lo capturamos y lo lanzamos
      endpointResponse({
        res,
        status: error.status || 'error',
        code: error.statusCode || 500,
        message: error.message || 'Error al obtener las rutas.'
      });
    }
  }),

  getById: catchAsync(async (req, res) => {
    try {
      const { id } = req.params;
      const route = await RouteService.getById(id);

      if (!route) {
        throw new ErrorObject(
          `No se encontró ningúna ruta con el ID: ${id}`,
          404
        );
      }

      endpointResponse({
        res,
        status: 'success',
        message: 'Ruta obtenida con éxito!',
        body: route
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
      // Obtenemos los datos de la ruta desde el body
      const { originId, destinationId, duration, distance, price } = req.body;

      const route = {
        originId,
        destinationId,
        duration,
        distance,
        price
      };

      // Creamos la ruta
      const newRoute = await RouteService.create(route);

      // Si no se pudo crear la ruta, lanzamos un error
      if (!newRoute) {
        throw new Error('No se pudo añadir la ruta!');
      }

      // Si se pudo crear la ruta, enviamos la respuesta
      endpointResponse({
        res,
        code: 201,
        message: 'Ruta añadida con éxito!',
        body: newRoute
      });
    } catch (error) {
      // Si hubo un error, lo capturamos y lo lanzamos
      endpointResponse({
        res,
        status: error.status || 'error',
        code: error.statusCode || 500,
        message: error.message || 'No se pudo registrar la ruta!'
      });
    }
  }),

  update: catchAsync(async (req, res) => {
    try {
      const { id } = req.params;
      const route = req.body;

      // Actualizamos la ruta
      const updatedRoute = await RouteService.update(id, route);

      // Si no se pudo actualizar la ruta, lanzamos un error
      if (!updatedRoute) {
        throw new ErrorObject('No se pudo actualizar la ruta!', 500);
      }

      // Si se pudo actualizar la ruta, enviamos la respuesta
      endpointResponse({
        res,
        status: 'success',
        message: 'Ruta actualizada con éxito!',
        body: updatedRoute
      });
    } catch (error) {
      // Si hubo un error, lo capturamos y lo lanzamos
      endpointResponse({
        res,
        status: error.status || 'error',
        code: error.statusCode || 500,
        message: error.message || 'Error al actualizar la ruta!'
      });
    }
  }),

  remove: catchAsync(async (req, res) => {
    try {
      const { id } = req.params;
      await RouteService.remove(id);

      // Si se pudo eliminar la ruta, enviamos la respuesta
      endpointResponse({
        res,
        status: 'success',
        message: 'Ruta eliminada con éxito!'
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
