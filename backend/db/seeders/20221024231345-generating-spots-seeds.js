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
        lat:33.58,   
        lng: -111.89,
        name: 'Mescal St. House',
        description: 'Nice place to stay',
        price: 1300.00,
      },
      {
        address: '1122 S. Random Ave',
        city: 'Strawberry',
        state: 'Arizona',
        country: 'United States',
        lat: 31.59,   
        lng: -100.89,
        name: 'Crappy House',
        description: 'Stanky',
        price: 125.00,
      },
      {
        address: '1111 N. East St.',
        city: 'Tempe',
        state: 'Arizona',
        country: 'United States',
        lat: 31.59,   
        lng: -100.89,
        name: 'Town House',
        description: 'Multi-Story Town Home',
        price: 250.00,
      },
      {
        address: '2222 S. West St.',
        city: 'Mesa',
        state: 'Arizona',
        country: 'United States',
        lat: 31.59,   
        lng: -100.89,
        name: 'East Side Living',
        description: 'Put Description Here',
        price: 300.00,
      },
      {
        address: '3333 E. North St.',
        city: 'Phoenix',
        state: 'Arizona',
        country: 'United States',
        lat: 31.59,   
        lng: -100.89,
        name: 'Downtown Phoenix Apartment',
        description: 'Put Description Here',
        price: 225.00,
      },
      {
        address: '4444 N. South Ave.',
        city: 'Sedona',
        state: 'Arizona',
        country: 'United States',
        lat: 31.59,   
        lng: -100.89,
        name: 'Large Cliffside Mansion',
        description: 'Put Description Here',
        price: 955.00,
      },
      {
        address: '5443 N Lyndon Ave.',
        city: 'Mesa',
        state: 'Arizona',
        country: 'United States',
        lat: 31.59,   
        lng: -100.89,
        name: 'Needs Name',
        description: 'Put Description Here',
        price: 450.00,
      },
      {
        address: '7841 N 32 St.',
        city: 'Phoenix',
        state: 'Arizona',
        country: 'United States',
        lat: 31.59,   
        lng: -100.89,
        name: 'Downtown, near stadium',
        description: 'Put Description Here',
        price: 333.00,
      },
      {
        address: '3654 S Kenwood Dr.',
        city: 'Tempe',
        state: 'Arizona',
        country: 'United States',
        lat: 31.59,   
        lng: -100.89,
        name: 'No Clue',
        description: 'Put Description Here',
        price: 355.00,
      },
      {
        address: '1850 E. Southern Ave.',
        city: 'Scottsdale',
        state: 'Arizona',
        country: 'United States',
        lat: 31.59,   
        lng: -100.89,
        name: 'Paradise valley house',
        description: 'Sick',
        price: 760.00,
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
    await queryInterface.bulkDelete('Spots', null, {});
  }
};
