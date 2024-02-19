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
          food: false,
          wifi: true,
          airConditioner: true
        },
        {
          idVehicle: 2,
          usb: true,
          tv: true,
          food: true,
          wifi: true,
          airConditioner: true
        },
        {
          idVehicle: 3,
          usb: true,
          tv: true,
          food: true,
          wifi: true,
          airConditioner: true
        },
        {
          idVehicle: 4,
          usb: true,
          tv: true,
          food: false,
          wifi: true,
          airConditioner: true
        },
        {
          idVehicle: 5,
          usb: true,
          tv: true,
          food: true,
          wifi: true,
          airConditioner: true
        },
        {
          idVehicle: 6,
          usb: true,
          tv: true,
          food: false,
          wifi: true,
          airConditioner: true
        },
        {
          idVehicle: 7,
          usb: true,
          tv: true,
          food: true,
          wifi: true,
          airConditioner: true
        },
        {
          idVehicle: 8,
          usb: true,
          tv: true,
          food: false,
          wifi: true,
          airConditioner: true
        },
        {
          idVehicle: 9,
          usb: true,
          tv: true,
          food: true,
          wifi: true,
          airConditioner: true
        },
        {
          idVehicle: 10,
          usb: true,
          tv: true,
          food: true,
          wifi: true,
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
