'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    let seatsData = [];
    const cantSeat = [60, 40, 40, 60, 40, 60, 40, 60, 40, 40];
    for (let vehicleNum = 0; vehicleNum < cantSeat.length; vehicleNum++) {
      let category = cantSeat[vehicleNum] <= 40 ? 'semi-cama' : 'standard';
      for (let i = 1; i <= cantSeat[vehicleNum]; i++) {
        seatsData.push({
          number: i,
          seatPrice: 0, // Puedes asignar un precio específico si es necesario
          vehicleId: vehicleNum + 1,
          category: category,
          createdAt: new Date(),
          updatedAt: new Date()
        });
      }
    }
    await queryInterface.bulkInsert('Seats', seatsData, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Seats', null, {});
  }
};
