'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Seats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      number: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      seatPrice: {
        type: Sequelize.FLOAT
      },
      vehicleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Vehicles',
          key: 'id'
        }
      },
      category: {
        type: Sequelize.ENUM('standard', 'semi-cama', 'cama')
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

    await queryInterface.createTable('BlockedSeats', {
      seatId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'Seats',
          key: 'id'
        }
      },
      scheduleId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Schedules',
          key: 'id'
        }
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    // Si pasan 5 minutos y el usuario no ha pagado, se libera el asiento
    await queryInterface.sequelize.query(`
      CREATE OR REPLACE FUNCTION remove_blocked_seats() RETURNS TRIGGER AS $$
      BEGIN
        DELETE FROM "BlockedSeats" WHERE date < NOW() - INTERVAL '5 minutes';
        RETURN NEW;
      END;
      $$ LANGUAGE plpgsql;
    `);
  },
  async down(queryInterface) {
    await queryInterface.dropTable('BlockedSeats');
    await queryInterface.dropTable('Seats');
  }
};
