'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    // Add seed commands here.
    await queryInterface.bulkInsert(
      'Amenities',
      [
        {
          name: 'Cargador USB'
        },
        {
          name: 'TV'
        },
        {
          name: 'Comida'
        },
        {
          name: 'WiFi'
        },
        {
          name: 'Aire Acondicionado'
        }
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Amenities', null, {});
  }
};
