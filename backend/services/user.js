const { User } = require('../database/models');

// Obtener todos los usuarios
const getAll = async () => {
  return await User.findAll({
    attributes: { exclude: ['password'] }
  });
};

// Obtener un usuario por su email
const getByEmail = async (email) => {
  const user = await User.findOne({
    where: { email },
    attributes: { exclude: ['password'] }
  });
  return user;
};

// Obtener un usuario por su id
const getById = async (id) => {
  const user = await User.findByPk(id, {
    attributes: { exclude: ['password'] }
  });
  return user;
};

// Crear un usuario
const create = async (user) => {
  return await User.create(user);
};

// Actualizar un usuario
const update = async (id, user) => {
  return await User.update(user, {
    where: { id },
    returning: true,
    plain: true
  });
};

// Eliminar un usuario
const remove = async (id) => {
  return await User.destroy({ where: { id } });
};

module.exports = {
  getAll,
  getByEmail,
  getById,
  create,
  update,
  remove
};
