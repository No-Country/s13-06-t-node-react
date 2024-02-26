'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    // Add seed commands here.
    await queryInterface.bulkInsert(
      'Vehicles',
      [
        {
          number: 1,
          plate: 'qrst90',
          totalSeats: 60
        },
        {
          number: 2,
          plate: 'abcd12',
          totalSeats: 40
        },
        {
          number: 3,
          plate: 'wxyz34',
          totalSeats: 40
        },
        {
          number: 4,
          plate: 'pqrs56',
          totalSeats: 60
        },
        {
          number: 5,
          plate: 'jklm78',
          totalSeats: 40
        },
        {
          number: 6,
          plate: 'uvwx90',
          totalSeats: 60
        },
        {
          number: 7,
          plate: 'stuv12',
          totalSeats: 40
        },
        {
          number: 8,
          plate: 'efgh34',
          totalSeats: 60
        },
        {
          number: 9,
          plate: 'ijkl56',
          totalSeats: 40
        },
        {
          number: 10,
          plate: 'mnop78',
          totalSeats: 40
        },
        {
          number: 11,
          plate: 'abcd34',
          totalSeats: 60
        },
        {
          number: 12,
          plate: 'efgh56',
          totalSeats: 40
        },
        {
          number: 13,
          plate: 'ijkl78',
          totalSeats: 40
        },
        {
          number: 14,
          plate: 'mnop90',
          totalSeats: 60
        },
        {
          number: 15,
          plate: 'qrst12',
          totalSeats: 40
        },
        {
          number: 16,
          plate: 'uvwx34',
          totalSeats: 60
        },
        {
          number: 17,
          plate: 'yzab56',
          totalSeats: 40
        },
        {
          number: 18,
          plate: 'cdef78',
          totalSeats: 60
        },
        {
          number: 19,
          plate: 'ghij90',
          totalSeats: 40
        },
        {
          number: 20,
          plate: 'klmn12',
          totalSeats: 40
        }
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Vehicles', null, {});
  }
};
