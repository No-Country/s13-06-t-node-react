'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    // Add seed commands here.
    await queryInterface.bulkInsert(
      'Vehicles',
      [
        {
          number: 10,
          plate: 'RJPF62',
          totalSeats: 42
        }
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Vehicles', null, {});
  }
};
