'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('SpotImages', [

      //IMAGES FOR FIRST SPOT TO TEST IMAGES ARRAY
      {
        "spotId": 1,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-715759276214360126/original/875ea373-9fa5-4632-9228-0bb8aa3efa88.jpeg?im_w=960',
        "preview": true,
      },
      {
        "spotId": 1,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-715759276214360126/original/a811a4d0-14d2-45f1-ac43-9964f61c261a.jpeg?im_w=720',
        "preview": false,
      },
      {
        "spotId": 1,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-715759276214360126/original/96bd40c8-a62a-4f4e-8c5e-f4a85656084a.jpeg?im_w=720',
        "preview": false,
      },
      {
        "spotId": 1,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-715759276214360126/original/efb19fc3-7027-4b95-aa85-41e9b1339224.jpeg?im_w=720',
        "preview": false,
      },
      {
        "spotId": 1,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-715759276214360126/original/6c04ca59-6e3b-4cf3-8cb2-210b01e4f09a.jpeg?im_w=720',
        "preview": false,
      },
      //END FIRST SPOT TEST IMAGES

      {
        "spotId": 2,
        "url": 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-725969533881158001/original/e96c165d-6cd8-4d2e-8670-9e22fd382d64.jpeg?im_w=1200',
        "preview": true,
      },
      {
        "spotId": 2,
        "url": 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-725969533881158001/original/41e5fd94-ea37-4360-99c9-4110ff17e1bd.jpeg?im_w=720',
        "preview": false,
      },
      {
        "spotId": 2,
        "url": 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-725969533881158001/original/ab9a91e4-79fa-40fc-9186-43e850e263cd.jpeg?im_w=720',
        "preview": false,
      },
      {
        "spotId": 2,
        "url": 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-725969533881158001/original/259a1f3f-27fd-4bfe-9f1e-33b7f95fc102.jpeg?im_w=720',
        "preview": false,
      },
      {
        "spotId": 2,
        "url": 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-725969533881158001/original/b3ca7a93-00ee-4d38-954e-b9a592010cc5.jpeg?im_w=720',
        "preview": false,
      },
      /********** END OF SPOT 2 IMAGES **********/

      {
        "spotId": 3,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-21605015/original/e914d980-5585-4fbe-a0ef-21b8d0b1cf8c.jpeg?im_w=720',
        "preview": true,
      },
      {
        "spotId": 3,
        "url": 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-35614824/original/58805a76-d630-4896-88c1-60a6f77f865d.jpeg?im_w=720',
        "preview": false,
      },
      {
        "spotId": 3,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-53383464/original/791a2b8f-f04e-41e2-ab89-0d6a9a8fd5c7.jpeg?im_w=720',
        "preview": false,
      },
      {
        "spotId": 3,
        "url": 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-47354666/original/b92fc905-70ea-449a-aa95-c79ade3ceadb.jpeg?im_w=720',
        "preview": false,
      },
      {
        "spotId": 3,
        "url": 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-47354666/original/b92fc905-70ea-449a-aa95-c79ade3ceadb.jpeg?im_w=720',
        "preview": false,
      },
      /********** END OF SPOT 3 IMAGES **********/

      {
        "spotId": 4,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-708865711652798286/original/d628aa29-a30c-4594-bf58-02896d9d8c91.jpeg?im_w=1200',
        "preview": true,
      },
      {
        "spotId": 4,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-708865711652798286/original/28e7d143-6fba-4267-b52e-70359ca2def5.jpeg?im_w=720',
        "preview": false,
      },
      {
        "spotId": 4,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-708865711652798286/original/7ec7f817-9c63-4bc8-81d3-75afb0873979.jpeg?im_w=720',
        "preview": false,
      },
      {
        "spotId": 4,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-708865711652798286/original/56696fde-16cf-4030-b891-1f44e6ac0cff.jpeg?im_w=720',
        "preview": false,
      },
      {
        "spotId": 4,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-708865711652798286/original/dac63831-1579-498a-a040-d770914f5b6c.jpeg?im_w=720',
        "preview": false,
      },
      /********** END OF SPOT 4 IMAGES **********/

      {
        "spotId": 5,
        "url": '',
        "preview": true,
      },
      {
        "spotId": 5,
        "url": '',
        "preview": false,
      },
      {
        "spotId": 5,
        "url": '',
        "preview": false,
      },
      {
        "spotId": 5,
        "url": '',
        "preview": false,
      },
      {
        "spotId": 5,
        "url": '',
        "preview": false,
      },
      /********** END OF SPOT 5 IMAGES **********/
      
      {
        "spotId": 6,
        "url": '',
        "preview": true,
      },
      {
        "spotId": 6,
        "url": '',
        "preview": false,
      },
      {
        "spotId": 6,
        "url": '',
        "preview": false,
      },
      {
        "spotId": 6,
        "url": '',
        "preview": false,
      },
      {
        "spotId": 6,
        "url": '',
        "preview": false,
      },
      /********** END OF SPOT 6 IMAGES **********/

      {
        "spotId": 7,
        "url": '',
        "preview": true,
      },
      {
        "spotId": 7,
        "url": '',
        "preview": false,
      },
      {
        "spotId": 7,
        "url": '',
        "preview": false,
      },
      {
        "spotId": 7,
        "url": '',
        "preview": false,
      },
      {
        "spotId": 7,
        "url": '',
        "preview": false,
      },
      /********** END OF SPOT 7 IMAGES **********/

      {
        "spotId": 8,
        "url": '',
        "preview": true,
      },
      {
        "spotId": 8,
        "url": '',
        "preview": false,
      },
      {
        "spotId": 8,
        "url": '',
        "preview": false,
      },
      {
        "spotId": 8,
        "url": '',
        "preview": false,
      },
      {
        "spotId": 8,
        "url": '',
        "preview": false,
      },
      /********** END OF SPOT 8 IMAGES **********/

      {
        "spotId": 9,
        "url": '',
        "preview": true,
      },
      {
        "spotId": 9,
        "url": '',
        "preview": false,
      },
      {
        "spotId": 9,
        "url": '',
        "preview": false,
      },
      {
        "spotId": 9,
        "url": '',
        "preview": false,
      },
      {
        "spotId": 9,
        "url": '',
        "preview": false,
      },
      /********** END OF SPOT 9 IMAGES **********/

      {
        "spotId": 10,
        "url": '',
        "preview": true,
      },
      {
        "spotId": 10,
        "url": '',
        "preview": false,
      },
      {
        "spotId": 10,
        "url": '',
        "preview": false,
      },
      {
        "spotId": 10,
        "url": '',
        "preview": false,
      },
      {
        "spotId": 10,
        "url": '',
        "preview": false,
      },
      /********** END OF SPOT 10 IMAGES **********/

      {
        "spotId": 11,
        "url": '',
        "preview": true,
      },
      {
        "spotId": 11,
        "url": '',
        "preview": false,
      },
      {
        "spotId": 11,
        "url": '',
        "preview": false,
      },
      {
        "spotId": 11,
        "url": '',
        "preview": false,
      },
      {
        "spotId": 11,
        "url": '',
        "preview": false,
      },
      /********** END OF SPOT 11 IMAGES **********/

      {
        "spotId": 12,
        "url": '',
        "preview": true,
      },
      {
        "spotId": 12,
        "url": '',
        "preview": false,
      },
      {
        "spotId": 12,
        "url": '',
        "preview": false,
      },
      {
        "spotId": 12,
        "url": '',
        "preview": false,
      },
      {
        "spotId": 12,
        "url": '',
        "preview": false,
      },
      /********** END OF SPOT 12 IMAGES **********/
      
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('SpotImages', null, {});
  }
};
