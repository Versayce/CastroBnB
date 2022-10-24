'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Spots', [
      {
        address: '8963 E. Mescal St',
        city: 'Scottsdale',
        state: 'Arizona',
        country: 'United States',
        lat:33.58,   //values: 33.586403918117085, -111.8877199944135
        lng: -111.89,
        name: 'Mescal House',
        description: 'Nice place to stay',
        price: 1300.00,
      },
      {
        address: '1122 S. Random Ave',
        city: 'Somewhere',
        state: 'Arizona',
        country: 'United States',
        lat: 31.59,   //values: 33.586403918117085, -111.8877199944135
        lng: -100.89,
        name: 'Crappy House',
        description: 'One big stinky place',
        price: 125.00,
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Spots');
  }
};
