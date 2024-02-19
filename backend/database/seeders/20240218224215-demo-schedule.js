'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Schedules',
      [
        // Route 1 schedules
        {
          routeId: 1,
          day: 'MON',
          departureTime: '08:00:00',
          cost: 50.0,
          vehicleId: 1
        },
        {
          routeId: 1,
          day: 'MON',
          departureTime: '12:00:00',
          cost: 50.0,
          vehicleId: 2
        },
        {
          routeId: 1,
          day: 'MON',
          departureTime: '16:00:00',
          cost: 50.0,
          vehicleId: 3
        },
        {
          routeId: 1,
          day: 'WED',
          departureTime: '09:30:00',
          cost: 50.0,
          vehicleId: 1
        },
        {
          routeId: 1,
          day: 'WED',
          departureTime: '13:30:00',
          cost: 50.0,
          vehicleId: 2
        },
        {
          routeId: 1,
          day: 'WED',
          departureTime: '17:30:00',
          cost: 50.0,
          vehicleId: 3
        },
        {
          routeId: 1,
          day: 'FRI',
          departureTime: '10:15:00',
          cost: 50.0,
          vehicleId: 1
        },
        {
          routeId: 1,
          day: 'FRI',
          departureTime: '14:15:00',
          cost: 50.0,
          vehicleId: 2
        },
        {
          routeId: 1,
          day: 'FRI',
          departureTime: '18:15:00',
          cost: 50.0,
          vehicleId: 3
        },
        {
          routeId: 1,
          day: 'SAT',
          departureTime: '11:00:00',
          cost: 50.0,
          vehicleId: 4
        },

        // Route 2 schedules
        {
          routeId: 2,
          day: 'MON',
          departureTime: '08:30:00',
          cost: 50.0,
          vehicleId: 5
        },
        {
          routeId: 2,
          day: 'MON',
          departureTime: '12:30:00',
          cost: 60.0,
          vehicleId: 6
        },
        {
          routeId: 2,
          day: 'MON',
          departureTime: '16:30:00',
          cost: 60.0,
          vehicleId: 7
        },
        {
          routeId: 2,
          day: 'WED',
          departureTime: '09:45:00',
          cost: 60.0,
          vehicleId: 5
        },
        {
          routeId: 2,
          day: 'WED',
          departureTime: '13:45:00',
          cost: 60.0,
          vehicleId: 6
        },
        {
          routeId: 2,
          day: 'WED',
          departureTime: '17:45:00',
          cost: 60.0,
          vehicleId: 7
        },
        {
          routeId: 2,
          day: 'FRI',
          departureTime: '10:00:00',
          cost: 60.0,
          vehicleId: 5
        },
        {
          routeId: 2,
          day: 'FRI',
          departureTime: '14:00:00',
          cost: 60.0,
          vehicleId: 6
        },
        {
          routeId: 2,
          day: 'FRI',
          departureTime: '18:00:00',
          cost: 60.0,
          vehicleId: 7
        },
        {
          routeId: 2,
          day: 'SAT',
          departureTime: '11:30:00',
          cost: 50.0,
          vehicleId: 8
        },

        // Route 3 schedules
        {
          routeId: 3,
          day: 'TUE',
          departureTime: '08:15:00',
          cost: 40.0,
          vehicleId: 9
        },
        {
          routeId: 3,
          day: 'TUE',
          departureTime: '12:15:00',
          cost: 55.0,
          vehicleId: 10
        },
        {
          routeId: 3,
          day: 'TUE',
          departureTime: '16:15:00',
          cost: 55.0,
          vehicleId: 11
        },
        {
          routeId: 3,
          day: 'THU',
          departureTime: '10:00:00',
          cost: 55.0,
          vehicleId: 9
        },
        {
          routeId: 3,
          day: 'THU',
          departureTime: '14:00:00',
          cost: 55.0,
          vehicleId: 10
        },
        {
          routeId: 3,
          day: 'THU',
          departureTime: '18:00:00',
          cost: 55.0,
          vehicleId: 11
        },
        {
          routeId: 3,
          day: 'SAT',
          departureTime: '13:00:00',
          cost: 40.0,
          vehicleId: 12
        },

        // Route 4 schedules
        {
          routeId: 4,
          day: 'TUE',
          departureTime: '09:00:00',
          cost: 50.0,
          vehicleId: 13
        },
        {
          routeId: 4,
          day: 'TUE',
          departureTime: '13:00:00',
          cost: 70.0,
          vehicleId: 14
        },
        {
          routeId: 4,
          day: 'TUE',
          departureTime: '17:00:00',
          cost: 70.0,
          vehicleId: 15
        },
        {
          routeId: 4,
          day: 'THU',
          departureTime: '10:15:00',
          cost: 70.0,
          vehicleId: 13
        },
        {
          routeId: 4,
          day: 'THU',
          departureTime: '14:15:00',
          cost: 70.0,
          vehicleId: 14
        },
        {
          routeId: 4,
          day: 'THU',
          departureTime: '18:15:00',
          cost: 70.0,
          vehicleId: 15
        },
        {
          routeId: 4,
          day: 'SAT',
          departureTime: '12:30:00',
          cost: 50.0,
          vehicleId: 16
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Schedules', null, {});
  }
};
