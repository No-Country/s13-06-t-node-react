'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Amenities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idVehicle: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Vehicles',
          key: 'id'
        }
      },
      usb: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      tv: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      food: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      wifi: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      airConditioner: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
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
    await queryInterface.dropTable('Amenities');
  }
};
