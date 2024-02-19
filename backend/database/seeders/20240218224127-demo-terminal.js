'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Terminals',
      [
        {
          lat: -34.586038978354786,
          lon: -58.373904326868484,
          cityId: 1,
          terminalName: 'Retiro',
          terminalCode: 101
        },
        {
          lat: -31.422642411115337,
          lon: -64.1752754681699,
          cityId: 2,
          terminalName: 'Cordoba',
          terminalCode: 201
        },
        {
          lat: -31.424131932362194,
          lon: -64.17253998369662,
          cityId: 2,
          terminalName: 'Nueva',
          terminalCode: 202
        }
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Terminals', null, {});
  }
};
