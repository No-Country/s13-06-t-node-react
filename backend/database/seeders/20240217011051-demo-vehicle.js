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
          plate: 'QRST90',
          totalSeats: 60
        },
        {
          number: 2,
          plate: 'ABCD12',
          totalSeats: 40
        },
        {
          number: 3,
          plate: 'WXYZ34',
          totalSeats: 40
        },
        {
          number: 4,
          plate: 'PQRS56',
          totalSeats: 60
        },
        {
          number: 5,
          plate: 'JKLM78',
          totalSeats: 40
        },
        {
          number: 6,
          plate: 'UVWX90',
          totalSeats: 60
        },
        {
          number: 7,
          plate: 'STUV12',
          totalSeats: 40
        },
        {
          number: 8,
          plate: 'EFGH34',
          totalSeats: 60
        },
        {
          number: 9,
          plate: 'IJKL56',
          totalSeats: 40
        },
        {
          number: 10,
          plate: 'MNOP78',
          totalSeats: 40
        },
        {
          number: 11,
          plate: 'ABCD34',
          totalSeats: 60
        },
        {
          number: 12,
          plate: 'EFGH56',
          totalSeats: 40
        },
        {
          number: 13,
          plate: 'IJKL78',
          totalSeats: 40
        },
        {
          number: 14,
          plate: 'MNOP90',
          totalSeats: 60
        },
        {
          number: 15,
          plate: 'QRST12',
          totalSeats: 40
        },
        {
          number: 16,
          plate: 'UVWX34',
          totalSeats: 60
        },
        {
          number: 17,
          plate: 'YZAB56',
          totalSeats: 40
        },
        {
          number: 18,
          plate: 'CDEF78',
          totalSeats: 60
        },
        {
          number: 19,
          plate: 'GHIJ90',
          totalSeats: 40
        },
        {
          number: 20,
          plate: 'KLMN12',
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
