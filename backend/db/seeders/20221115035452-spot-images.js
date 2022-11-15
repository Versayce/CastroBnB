'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('SpotImages', [
      {
        "spotId": 1,
        "url": 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/s5-1617720734.jpeg?crop=0.883xw:0.659xh;0.0391xw,0.249xh&resize=980:*',
        "preview": true,
      },
      {
        "spotId": 2,
        "url": 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/s5-1617720734.jpeg?crop=0.883xw:0.659xh;0.0391xw,0.249xh&resize=980:*',
        "preview": true,
      },
      {
        "spotId": 3,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-53383464/original/791a2b8f-f04e-41e2-ab89-0d6a9a8fd5c7.jpeg?im_w=720',
        "preview": true,
      },
      {
        "spotId": 4,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-53383464/original/791a2b8f-f04e-41e2-ab89-0d6a9a8fd5c7.jpeg?im_w=720',
        "preview": true,
      },
      {
        "spotId": 5,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-53383464/original/791a2b8f-f04e-41e2-ab89-0d6a9a8fd5c7.jpeg?im_w=720',
        "preview": true,
      },
      {
        "spotId": 6,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-53383464/original/791a2b8f-f04e-41e2-ab89-0d6a9a8fd5c7.jpeg?im_w=720',
        "preview": true,
      },
      {
        "spotId": 7,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-53383464/original/791a2b8f-f04e-41e2-ab89-0d6a9a8fd5c7.jpeg?im_w=720',
        "preview": true,
      },
      {
        "spotId": 8,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-53383464/original/791a2b8f-f04e-41e2-ab89-0d6a9a8fd5c7.jpeg?im_w=720',
        "preview": true,
      },
      {
        "spotId": 9,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-53383464/original/791a2b8f-f04e-41e2-ab89-0d6a9a8fd5c7.jpeg?im_w=720',
        "preview": true,
      },
      {
        "spotId": 10,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-53383464/original/791a2b8f-f04e-41e2-ab89-0d6a9a8fd5c7.jpeg?im_w=720',
        "preview": true,
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('SpotImages', null, {});
  }
};
