const {
  Ticket,
  BlockedSeat,
  Seat,
  Schedule,
  Vehicle
} = require('../database/models');

const getSeatsByScheduleId = async (id, date) => {
  const purchasedSeats = await Ticket.findAll({
    where: {
      scheduleId: id,
      departureDate: date
    }
  });

  let purchasedSeatsIds = [];

  if (purchasedSeats) {
    purchasedSeatsIds = purchasedSeats.map((s) => s.seatId);
  }

  const blockedSeats = await BlockedSeat.findAll({
    where: {
      scheduleId: id,
      date
    }
  });

  let blockedSeatsIds = [];

  if (blockedSeats) {
    blockedSeatsIds = blockedSeats.map((s) => s.seatId);
  }

  const lockedSeats = [...purchasedSeatsIds, ...blockedSeatsIds];

  const { vehicleId } = await Schedule.findOne({
    where: {
      id
    },
    attributes: ['vehicleId']
  });

  const seats = await Seat.findAll({
    include: [
      {
        model: Vehicle,
        as: 'vehicle',
        where: {
          id: vehicleId
        }
      }
    ]
  });

  const availableSeats = seats.map((s) => {
    if (lockedSeats.includes(s.id)) {
      return {
        number: s.number,
        id: s.id,
        status: 'locked'
      };
    } else {
      return {
        number: s.number,
        id: s.id,
        status: 'free'
      };
    }
  });

  return availableSeats;
};

const checkScheduleExistsById = async (scheduleId) =>
  Boolean(
    await Schedule.findOne({
      where: {
        id: scheduleId
      }
    })
  );

const isSeatLocked = async (seatId, scheduleId, date) =>
  Boolean(
    await BlockedSeat.findOne({
      where: {
        seatId,
        scheduleId,
        date
      }
    })
  );

const lockSeat = async (seatId, scheduleId, date) => {
  await BlockedSeat.create({
    seatId,
    scheduleId,
    date
  });
};

const unlockSeat = async (seatId, scheduleId, date) => {
  await BlockedSeat.destroy({
    where: {
      seatId,
      scheduleId,
      date
    }
  });
};

module.exports = {
  getSeatsByScheduleId,
  checkScheduleExistsById,
  lockSeat,
  unlockSeat,
  isSeatLocked
};
