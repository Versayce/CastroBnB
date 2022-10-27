'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Reviews', [
      {
        "spotId": 3,
        "userId": 2,
        "review": "Great amenities",
        "stars": 5
      },
      {
        "spotId": 3,
        "userId": 3,
        "review": "Horribly smelly kitchen",
        "stars": 1
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Reviews', null, {});
  }
};
