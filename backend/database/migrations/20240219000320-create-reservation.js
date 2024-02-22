'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reservations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      passengerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Passengers',
          key: 'id'
        }
      },
      seatId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Seats',
          key: 'id'
        }
      },
      totalPrice: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      scheduleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Schedules',
          key: 'id'
        }
      },
      dateReservation: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Reservations');
  }
};
