'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Schedules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      routeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Routes',
          key: 'id'
        }
      },
      day: {
        type: Sequelize.ENUM('SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'),
        allowNull: false
      },
      departureTime: {
        type: Sequelize.TIME,
        allowNull: false
      },
      cost: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      vehicleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Vehicles',
          key: 'id'
        }
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
    await queryInterface.dropTable('Schedules');
  }
};
