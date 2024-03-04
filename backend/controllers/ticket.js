const TicketService = require('../services/ticket');
const { catchAsync } = require('../helpers/catchAsync');
const { ErrorObject } = require('../helpers/error');
const { endpointResponse } = require('../helpers/success');

module.exports = {
  getAll: catchAsync(async (req, res) => {
    try {
      const tickets = await TicketService.getAll();

      if (!tickets) {
        throw new ErrorObject('No se pudieron obtener los tickets.', 500);
      }

      endpointResponse({
        res,
        status: 'success',
        message: 'Tickets obtenidos con éxito!',
        body: { tickets: tickets }
      });
    } catch (error) {
      endpointResponse({
        res,
        status: error.status || 'error',
        code: error.statusCode || 500,
        message: error.message || 'Error al obtener los tickets.'
      });
    }
  }),

  getById: catchAsync(async (req, res) => {
    try {
      const { id } = req.params;
      const ticket = await TicketService.getById(id);

      if (!ticket) {
        throw new ErrorObject('Ticket no encontrado', 404);
      }

      endpointResponse({
        res,
        status: 'success',
        message: 'Ticket encontrado correctamente!',
        body: { ticket }
      });
    } catch (error) {
      endpointResponse({
        res,
        status: error.status || 'error',
        code: error.statusCode || 500,
        message: error.message || 'No se pudo obtener el ticket.'
      });
    }
  }),

  getByEmail: catchAsync(async (req, res) => {
    try {
      const { email } = req.params;
      const ticket = await TicketService.getByEmail(email);

      if (!ticket) {
        throw new ErrorObject('Ticket no encontrado', 404);
      }

      endpointResponse({
        res,
        status: 'success',
        message: 'Ticket encontrado correctamente!',
        body: { ticket }
      });
    } catch (error) {
      endpointResponse({
        res,
        status: error.status || 'error',
        code: error.statusCode || 500,
        message: error.message || 'No se pudo obtener el ticket.'
      });
    }
  }),

  create: catchAsync(async (req, res) => {
    try {
      const ticket = req.body;
      const newTicket = await TicketService.create(ticket);

      endpointResponse({
        res,
        status: 'success',
        message: 'Ticket creado correctamente!',
        body: { ticket: newTicket }
      });
    } catch (error) {
      endpointResponse({
        res,
        status: error.status || 'error',
        code: error.statusCode || 500,
        message: error.message || 'No se pudo crear el ticket.'
      });
    }
  }),

  update: catchAsync(async (req, res) => {
    try {
      const { id } = req.params;
      const ticket = req.body;
      const updatedTicket = await TicketService.update(id, ticket);

      if (!updatedTicket) {
        throw new ErrorObject('No se pudo actualizar el ticket.', 500);
      }

      endpointResponse({
        res,
        status: 'success',
        message: 'Ticket actualizado correctamente!',
        body: { ticket: updatedTicket }
      });
    } catch (error) {
      endpointResponse({
        res,
        status: error.status || 'error',
        code: error.statusCode || 500,
        message: error.message || 'No se pudo actualizar el ticket.'
      });
    }
  }),

  remove: catchAsync(async (req, res) => {
    try {
      const { id } = req.params;
      const ticket = await TicketService.remove(id);
      if (!ticket) {
        throw new ErrorObject('Ticket no encontrado', 404);
      }

      endpointResponse({
        res,
        status: 'success',
        message: 'Ticket eliminado correctamente!'
      });
    } catch (error) {
      endpointResponse({
        res,
        status: error.status || 'error',
        code: error.statusCode || 500,
        message: error.message || 'No se pudo eliminar el ticket.'
      });
    }
  })
};
