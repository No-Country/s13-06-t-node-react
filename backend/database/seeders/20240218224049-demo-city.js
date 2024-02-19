'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Cities',
      [
        { name: 'Buenos Aires' },
        { name: 'Córdoba' },
        { name: 'Rosario' },
        { name: 'San Miguel de Tucumán' },
        { name: 'Mendoza' },
        { name: 'Mar del Plata' },
        { name: 'Salta' },
        { name: 'Santa Fe' },
        { name: 'Corrientes' },
        { name: 'Bahía Blanca' },
        { name: 'Resistencia' },
        { name: 'Posadas' },
        { name: 'Merlonota' },
        { name: 'Quilmes' },
        { name: 'San Salvador de Jujuy' },
        { name: 'Guaymallén' },
        { name: 'Santiago del Estero' },
        { name: 'Gregorio de Laferrere' },
        { name: 'José C. Paz' },
        { name: 'Paraná' },
        { name: 'Banfieldnota' },
        { name: 'González Catán' },
        { name: 'Neuquén' },
        { name: 'Formosa' },
        { name: 'Lanús' },
        { name: 'La Plata' },
        { name: 'Godoy Cruz' },
        { name: 'Isidro Casanova' },
        { name: 'Las Heras' },
        { name: 'Berazategui' },
        { name: 'La Rioja' },
        { name: 'Comodoro Rivadavia' },
        { name: 'Moreno' },
        { name: 'San Luis' },
        { name: 'San Miguelnota' },
        { name: 'San Fernando del Valle de Catamarca' },
        { name: 'Río Cuarto' },
        { name: 'Virrey del Pino' }
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Cities', null, {});
  }
};
