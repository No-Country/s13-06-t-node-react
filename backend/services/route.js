const { Route } = require('../database/models');

// Obtener todas las rutas
const getAll = async () => {
  return await Route.findAll({ include: { all: true, nested: true } });
};

// Obtener una ruta por su id
const getById = async (id) => {
  const route = await Route.findByPk(id);
  return route;
};

// Crear una ruta
const create = async (route) => {
  return await Route.create(route);
};

// Actualizar una ruta
const update = async (id, route) => {
  return await Route.update(route, {
    where: { id },
    returning: true,
    plain: true
  });
};

// Eliminar una ruta
const remove = async (id) => {
  return await Route.destroy({ where: { id } });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};
