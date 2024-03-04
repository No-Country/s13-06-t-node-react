const { Ticket } = require('../database/models');

// Obtener todos los tickets
const getAll = async () => {
  return await Ticket.findAll();
};

// Obtener un ticket por su id
const getById = async (id) => {
  return await Ticket.findByPk(id);
};

// Obtener un ticket por el usuario que lo compró
const getByEmail = async (email) => {
  return await Ticket.findAll({
    where: { email }
  });
};

// Crear un ticket
const create = async (ticket) => {
  return await Ticket.create(ticket);
};

// Actualizar un ticket
const update = async (id, ticket) => {
  return await Ticket.update(ticket, {
    where: { id },
    returning: true,
    plain: true
  });
};

// Eliminar un ticket
const remove = async (id) => {
  return await Ticket.destroy({ where: { id } });
};

module.exports = {
  getAll,
  getById,
  getByEmail,
  create,
  update,
  remove
};
