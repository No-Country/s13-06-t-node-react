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
        },
        {
          idVehicle: 11,
          usb: true,
          tv: true,
          food: false,
          wifi: true,
          airConditioner: true
        },
        {
          idVehicle: 12,
          usb: true,
          tv: true,
          food: true,
          wifi: true,
          airConditioner: true
        },
        {
          idVehicle: 13,
          usb: true,
          tv: true,
          food: true,
          wifi: true,
          airConditioner: true
        },
        {
          idVehicle: 14,
          usb: true,
          tv: true,
          food: false,
          wifi: true,
          airConditioner: true
        },
        {
          idVehicle: 15,
          usb: true,
          tv: true,
          food: true,
          wifi: true,
          airConditioner: true
        },
        {
          idVehicle: 16,
          usb: true,
          tv: true,
          food: false,
          wifi: true,
          airConditioner: true
        },
        {
          idVehicle: 17,
          usb: true,
          tv: true,
          food: true,
          wifi: true,
          airConditioner: true
        },
        {
          idVehicle: 18,
          usb: true,
          tv: true,
          food: false,
          wifi: true,
          airConditioner: true
        },
        {
          idVehicle: 19,
          usb: true,
          tv: true,
          food: true,
          wifi: true,
          airConditioner: true
        },
        {
          idVehicle: 20,
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
