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
      {
        "spotId": 1,
        "userId": 3,
        "review": "Review 3",
        "stars": 3
      },
      {
        "spotId": 1,
        "userId": 1,
        "review": "Review 4",
        "stars": 2
      },
      {
        "spotId": 1,
        "userId": 2,
        "review": "Testing userId conditional",
        "stars": 2
      },
      {
        "spotId": 1,
        "userId": 2,
        "review": "Testing userId conditional 2",
        "stars": 2
      },
      {
        "spotId": 2,
        "userId": 2,
        "review": "Review 5",
        "stars": 1
      },
      {
        "spotId": 4,
        "userId": 2,
        "review": "Review 6",
        "stars": 1
      },
      {
        "spotId": 5,
        "userId": 2,
        "review": "Review 7",
        "stars": 5
      },
      {
        "spotId": 5,
        "userId": 2,
        "review": "Review 8",
        "stars": 3
      },
      {
        "spotId": 6,
        "userId": 2,
        "review": "Review 9",
        "stars": 3
      },
      {
        "spotId": 2,
        "userId": 3,
        "review": "Review 10",
        "stars": 5
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Reviews', null, {});
  }
};
