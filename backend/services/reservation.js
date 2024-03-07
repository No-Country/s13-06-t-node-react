const {
  Reservation,
  Ticket,
  Schedule,
  Seat,
  Route,
  Terminal,
  City,
  sequelize
} = require('../database/models');
const getArrivalTime = require('../helpers/getArrivalTime');

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
  const reservation = await Reservation.findByPk(id, {
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
  if (reservation && reservation.schedule) {
    reservation.schedule.arrivalTime = getArrivalTime(
      reservation.schedule.departureTime,
      reservation.schedule.route.duration
    );
  }
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
  const result = await sequelize.transaction(async (t) => {
    reservation.totalSeats = passengers.length;

    const rsv = await Reservation.create(reservation, { transaction: t });
    const tickets = passengers.map((p) => ({
      ...p,
      reservationId: rsv.id,
      scheduleId: rsv.scheduleId,
      departureDate: rsv.dateReservation,
      userClientId: rsv?.userClientId
    }));

    await Ticket.bulkCreate(tickets, { transaction: t });
    const resultReservation = await getById(rsv.id, t);

    return resultReservation;
  });
  return result;
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
