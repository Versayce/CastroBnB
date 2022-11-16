'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('SpotImages', [
      {
        "spotId": 1,
        "url": 'https://a0.muscache.com/im/pictures/cf9aedb7-d2cd-4ca5-8661-1274434eedfe.jpg?im_w=720',
        "preview": true,
      },
      {
        "spotId": 2,
        "url": 'https://a0.muscache.com/im/pictures/ce9b772b-987e-4732-9d41-8e0d0ce24e43.jpg?im_w=720',
        "preview": true,
      },
      {
        "spotId": 3,
        "url": 'https://a0.muscache.com/im/pictures/78b6a739-d269-4549-9e6b-4ffc0b9eff58.jpg?im_w=720',
        "preview": true,
      },
      {
        "spotId": 4,
        "url": 'https://a0.muscache.com/im/pictures/9d69d36f-f219-403f-9aa9-186f88edf61a.jpg?im_w=720',
        "preview": true,
      },
      {
        "spotId": 5,
        "url": 'https://a0.muscache.com/im/pictures/a017859a-f4b8-499b-b871-f830b6053ad6.jpg?im_w=720',
        "preview": true,
      },
      {
        "spotId": 6,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-17109396/original/fae85a2e-e222-4d79-b1c0-569725d90f14.jpeg?im_w=720',
        "preview": true,
      },
      {
        "spotId": 7,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-21605015/original/e914d980-5585-4fbe-a0ef-21b8d0b1cf8c.jpeg?im_w=720',
        "preview": true,
      },
      {
        "spotId": 8,
        "url": 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-35614824/original/58805a76-d630-4896-88c1-60a6f77f865d.jpeg?im_w=720',
        "preview": true,
      },
      {
        "spotId": 9,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-53383464/original/791a2b8f-f04e-41e2-ab89-0d6a9a8fd5c7.jpeg?im_w=720',
        "preview": true,
      },
      {
        "spotId": 10,
        "url": 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-47354666/original/b92fc905-70ea-449a-aa95-c79ade3ceadb.jpeg?im_w=720',
        "preview": true,
      },
      {
        "spotId": 3,
        "url": 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-47354666/original/b92fc905-70ea-449a-aa95-c79ade3ceadb.jpeg?im_w=720',
        "preview": true,
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('SpotImages', null, {});
  }
};
