const {
  Reservation,
  Ticket,
  Schedule,
  Seat,
  Route,
  Terminal,
  City
} = require('../database/models');
const debug = require('debug')('app:service:reservation');

// Obtener todas las reservas
const getAll = async () => {
  return await Reservation.findAll({
    include: [
      {
        model: Ticket,
        as: 'tickets',
        attributes: ['id', 'firstName', 'lastName', 'dni'],
        include: [
          {
            model: Seat,
            as: 'seat',
            attributes: ['number', 'category']
          }
        ]
      },
      {
        model: Schedule,
        as: 'schedule',
        attributes: ['departureTime'],
        include: [
          {
            model: Route,
            as: 'route',
            attributes: ['id', 'duration', 'price', 'distance'],
            include: [
              {
                model: Terminal,
                as: 'originTerminal',
                attributes: ['terminalName', 'lon', 'lat'],
                include: [
                  {
                    model: City,
                    as: 'city',
                    attributes: ['name']
                  }
                ]
              },
              {
                model: Terminal,
                as: 'destinationTerminal',
                attributes: ['terminalName', 'lon', 'lat'],
                include: [
                  {
                    model: City,
                    as: 'city',
                    attributes: ['name']
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  });
};

// Obtener una reserva por su id
const getById = async (id) => {
  const reservation = await Reservation.findByPk(id);
  return reservation;
};

// Obtener una reserva por su email y fecha de reserva
const getByEmailAndDate = async (email, dateReservation) => {
  const reservation = await Reservation.findOne({
    where: { email, dateReservation }
  });
  return reservation;
};

// Obtener todas las reservas de un usuario
const getByUser = async (userClientId) => {
  const reservations = await Reservation.findAll({ where: { userClientId } });
  return reservations;
};

// Crear una reserva
const create = async (reservation, passengers) => {
  reservation.totalSeats = passengers.length;
  const rsv = await Reservation.create(reservation);
  const tickets = passengers.map((p) => ({
    ...p,
    reservationId: rsv.id,
    scheduleId: rsv.scheduleId,
    userClientId: rsv.userClientId
  }));
  debug(tickets);
  await Ticket.bulkCreate(tickets);
  return await getById(rsv.id);
};

// Actualizar una reserva
const update = async (id, reservation) => {
  return await Reservation.update(reservation, {
    where: { id },
    returning: true,
    plain: true
  });
};

// Eliminar una reserva
const remove = async (id) => {
  return await Reservation.destroy({ where: { id } });
};

module.exports = {
  getAll,
  getById,
  getByEmailAndDate,
  getByUser,
  create,
  update,
  remove
};
