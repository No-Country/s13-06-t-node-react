'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Routes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      originId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Terminals',
          key: 'id'
        }
      },
      destinationId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Terminals',
          key: 'id'
        }
      },
      duration: {
        type: Sequelize.TIME,
        allowNull: false
      },
      distance: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
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
    await queryInterface.dropTable('Routes');
  }
};
