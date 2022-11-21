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
        "userId": 2,
        "review": "Amazing place to stay",
        "stars": 5
      },
      {
        "spotId": 1,
        "userId": 3,
        "review": "Review 2",
        "stars": 1
      },
      {
        "spotId": 2,
        "userId": 1,
        "review": "Review 3",
        "stars": 3
      },
      {
        "spotId": 2,
        "userId": 2,
        "review": "Review 4",
        "stars": 2
      },
      {
        "spotId": 2,
        "userId": 3,
        "review": "Review 5",
        "stars": 2
      },
      {
        "spotId": 3,
        "userId": 1,
        "review": "Review 6",
        "stars": 2
      },
      {
        "spotId": 3,
        "userId": 2,
        "review": "Review 7",
        "stars": 1
      },
      {
        "spotId": 3,
        "userId": 3,
        "review": "Review 8",
        "stars": 1
      },
      {
        "spotId": 4,
        "userId": 1,
        "review": "Review 9",
        "stars": 5
      },
      {
        "spotId": 4,
        "userId": 2,
        "review": "Review 10",
        "stars": 3
      },
      {
        "spotId": 4,
        "userId": 3,
        "review": "Review 11",
        "stars": 3
      },
      {
        "spotId": 5,
        "userId": 1,
        "review": "Review 12",
        "stars": 5
      },
      {
        "spotId": 5,
        "userId": 3,
        "review": "Amazing",
        "stars": 5
      },
      {
        "spotId": 5,
        "userId": 1,
        "review": "Review 10",
        "stars": 5
      },
      {
        "spotId": 6,
        "userId": 2,
        "review": "Review 11",
        "stars": 3
      },
      {
        "spotId": 6,
        "userId": 1,
        "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "stars": 3
      },
      {
        "spotId": 6,
        "userId": 2,
        "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "stars": 4
      },
      {
        "spotId": 7,
        "userId": 3,
        "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "stars": 4
      },
      {
        "spotId": 7,
        "userId": 1,
        "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "stars": 1
      },
      {
        "spotId": 7,
        "userId": 2,
        "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "stars": 1
      },
      {
        "spotId": 8,
        "userId": 3,
        "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "stars": 2
      },
      {
        "spotId": 8,
        "userId": 1,
        "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "stars": 1
      },
      {
        "spotId": 8,
        "userId": 2,
        "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "stars": 2
      },
      {
        "spotId": 9,
        "userId": 3,
        "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "stars": 1
      },
      {
        "spotId": 9,
        "userId": 1,
        "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "stars": 4
      },
      {
        "spotId": 9,
        "userId": 2,
        "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "stars": 5
      },
      {
        "spotId": 10,
        "userId": 3,
        "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "stars": 5
      },
      {
        "spotId": 10,
        "userId": 1,
        "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "stars": 3
      },
      {
        "spotId": 10,
        "userId": 2,
        "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "stars": 5
      },
      {
        "spotId": 11,
        "userId": 3,
        "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "stars": 1
      },
      {
        "spotId": 11,
        "userId": 1,
        "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "stars": 5
      },
      {
        "spotId": 11,
        "userId": 2,
        "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "stars": 2
      },
      {
        "spotId": 12,
        "userId": 3,
        "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "stars": 2
      },
      {
        "spotId": 12,
        "userId": 1,
        "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "stars": 3
      },
      {
        "spotId": 12,
        "userId": 2,
        "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "stars": 5
      },


    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Reviews', null, {});
  }
};
