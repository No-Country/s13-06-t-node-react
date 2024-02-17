'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    // Add seed commands here.
    await queryInterface.bulkInsert(
      'Amenities',
      [
        {
          idVehicle: 1,
          usb: true,
          tv: true,
          airConditioner: true
        }
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Amenities', null, {});
  }
};
