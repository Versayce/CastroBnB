'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Reviews', [
      {
        "spotId": 1,
        "userId": 1,
        "review": "Review 1",
        "stars": 5
      },
      {
        "spotId": 1,
        "userId": 5,
        "review": "Review 2",
        "stars": 1
      },
      {
        "spotId": 1,
        "userId": 3,
        "review": "Review 3",
        "stars": 3
      },
      {
        "spotId": 2,
        "userId": 1,
        "review": "Review 4",
        "stars": 2
      },
      {
        "spotId": 2,
        "userId": 2,
        "review": "Review 5",
        "stars": 2
      },
      {
        "spotId": 2,
        "userId": 3,
        "review": "Review 6",
        "stars": 2
      },
      {
        "spotId": 3,
        "userId": 1,
        "review": "Review 7",
        "stars": 1
      },
      {
        "spotId": 3,
        "userId": 2,
        "review": "Review 8",
        "stars": 1
      },
      {
        "spotId": 3,
        "userId": 3,
        "review": "Review 9",
        "stars": 5
      },
      {
        "spotId": 4,
        "userId": 1,
        "review": "Review 10",
        "stars": 3
      },
      {
        "spotId": 4,
        "userId": 2,
        "review": "Review 11",
        "stars": 3
      },
      {
        "spotId": 4,
        "userId": 3,
        "review": "Review 12",
        "stars": 5
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Reviews', null, {});
  }
};
