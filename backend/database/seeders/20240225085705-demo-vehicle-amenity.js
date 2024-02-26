'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    // add seed commands here.
    await queryInterface.bulkInsert(
      'VehicleAmenities',
      [
        {
          vehicleId: 1,
          amenityId: 1
        },
        {
          vehicleId: 1,
          amenityId: 4
        },
        {
          vehicleId: 1,
          amenityId: 5
        },
        {
          vehicleId: 2,
          amenityId: 4
        },
        {
          vehicleId: 2,
          amenityId: 2
        },
        {
          vehicleId: 3,
          amenityId: 3
        },
        {
          vehicleId: 3,
          amenityId: 1
        },
        {
          vehicleId: 3,
          amenityId: 4
        },
        {
          vehicleId: 4,
          amenityId: 5
        },
        {
          vehicleId: 4,
          amenityId: 4
        },
        {
          vehicleId: 5,
          amenityId: 1
        },
        {
          vehicleId: 5,
          amenityId: 4
        },
        {
          vehicleId: 5,
          amenityId: 5
        },
        {
          vehicleId: 6,
          amenityId: 4
        },
        {
          vehicleId: 6,
          amenityId: 2
        },
        {
          vehicleId: 7,
          amenityId: 1
        },
        {
          vehicleId: 7,
          amenityId: 4
        },
        {
          vehicleId: 7,
          amenityId: 5
        },
        {
          vehicleId: 8,
          amenityId: 4
        },
        {
          vehicleId: 8,
          amenityId: 2
        },
        {
          vehicleId: 9,
          amenityId: 1
        },
        {
          vehicleId: 9,
          amenityId: 4
        },
        {
          vehicleId: 9,
          amenityId: 5
        },
        {
          vehicleId: 10,
          amenityId: 4
        },
        {
          vehicleId: 10,
          amenityId: 2
        },
        {
          vehicleId: 11,
          amenityId: 1
        },
        {
          vehicleId: 11,
          amenityId: 4
        },
        {
          vehicleId: 11,
          amenityId: 5
        },
        {
          vehicleId: 12,
          amenityId: 4
        },
        {
          vehicleId: 12,
          amenityId: 2
        },
        {
          vehicleId: 13,
          amenityId: 1
        },
        {
          vehicleId: 13,
          amenityId: 4
        },
        {
          vehicleId: 13,
          amenityId: 5
        },
        {
          vehicleId: 14,
          amenityId: 4
        },
        {
          vehicleId: 14,
          amenityId: 2
        },
        {
          vehicleId: 15,
          amenityId: 1
        },
        {
          vehicleId: 15,
          amenityId: 4
        },
        {
          vehicleId: 15,
          amenityId: 5
        },
        {
          vehicleId: 16,
          amenityId: 4
        },
        {
          vehicleId: 16,
          amenityId: 2
        },
        {
          vehicleId: 17,
          amenityId: 1
        },
        {
          vehicleId: 17,
          amenityId: 4
        },
        {
          vehicleId: 17,
          amenityId: 5
        },
        {
          vehicleId: 18,
          amenityId: 4
        },
        {
          vehicleId: 18,
          amenityId: 2
        },
        {
          vehicleId: 19,
          amenityId: 1
        },
        {
          vehicleId: 19,
          amenityId: 4
        },
        {
          vehicleId: 19,
          amenityId: 5
        },
        {
          vehicleId: 20,
          amenityId: 4
        },
        {
          vehicleId: 20,
          amenityId: 2
        }
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('VehicleAmenities', null, {});
  }
};
