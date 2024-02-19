'use strict';

/** @type {import('sequelize-cli').Migration} */
const pricePerKm = 80;
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Routes',
      [
        {
          originId: 1,
          destinationId: 2,
          duration: '10:10:00',
          distance: 635,
          price: 50000
        },
        {
          originId: 2,
          destinationId: 1,
          duration: '07:35:00',
          distance: 695,
          price: 70000
        },
        {
          originId: 1,
          destinationId: 3,
          duration: '08:10:00',
          distance: 635,
          price: 60000
        },
        {
          originId: 3,
          destinationId: 1,
          duration: '07:35:00',
          distance: 695,
          price: 70000
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Routes', null, {});
  }
};
