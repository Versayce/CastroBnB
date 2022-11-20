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
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-711284603657265315/original/2ce2a515-078f-4c71-9b94-e2d0997f46d0.jpeg?im_w=1200',
        "preview": true,
      },
      {
        "spotId": 3,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-711284603657265315/original/1d3faa49-0463-46a8-b080-c0223a685424.jpeg?im_w=720',
        "preview": false,
      },
      {
        "spotId": 3,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-711284603657265315/original/12998baa-87cb-43c5-9d98-cfcc097ce025.jpeg?im_w=720',
        "preview": false,
      },
      {
        "spotId": 3,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-711284603657265315/original/cf3318de-8d6f-4308-b705-10b39317759e.jpeg?im_w=720',
        "preview": false,
      },
      {
        "spotId": 3,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-711284603657265315/original/11b9ee04-a7cf-4c58-a23e-f8085e8baf36.jpeg?im_w=720',
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
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-717228152145251237/original/ece76396-95a4-4001-a03e-2e335e46cf88.jpeg?im_w=960',
        "preview": true,
      },
      {
        "spotId": 5,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-717228152145251237/original/1f47f2d8-0c26-40d1-9d11-267746d76a73.jpeg?im_w=720',
        "preview": false,
      },
      {
        "spotId": 5,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-717228152145251237/original/8278fbf2-4728-425a-854a-e8125ba799fb.jpeg?im_w=720',
        "preview": false,
      },
      {
        "spotId": 5,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-717228152145251237/original/2ed26522-8f95-45c9-8d6c-edcef60b2e27.jpeg?im_w=720',
        "preview": false,
      },
      {
        "spotId": 5,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-717228152145251237/original/69ee1de4-572d-48df-8d8f-836a17359467.jpeg?im_w=720',
        "preview": false,
      },
      /********** END OF SPOT 5 IMAGES **********/
      
      {
        "spotId": 6,
        "url": 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-715591832709816650/original/eda6e7e6-0c9c-460f-bc45-8cbb54b60e8d.jpeg?im_w=960',
        "preview": true,
      },
      {
        "spotId": 6,
        "url": 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-715591832709816650/original/175fff1f-c685-44a0-a49e-3d60b658a25c.jpeg?im_w=720',
        "preview": false,
      },
      {
        "spotId": 6,
        "url": 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-715591832709816650/original/7b20d044-42cf-4823-a79e-0055ea802414.jpeg?im_w=720',
        "preview": false,
      },
      {
        "spotId": 6,
        "url": 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-715591832709816650/original/dba6da5b-ddf0-473a-8210-98e0f5064087.jpeg?im_w=720',
        "preview": false,
      },
      {
        "spotId": 6,
        "url": 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-715591832709816650/original/38edb5f7-0059-47c5-8b91-46569983c628.jpeg?im_w=720',
        "preview": false,
      },
      /********** END OF SPOT 6 IMAGES **********/

      {
        "spotId": 7,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-724728953051983834/original/ef6d84ef-35f0-40d0-89b8-96c9b08708b1.jpeg?im_w=960',
        "preview": true,
      },
      {
        "spotId": 7,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-724728953051983834/original/946c3416-f8fd-4337-a678-a78d13e38769.jpeg?im_w=720',
        "preview": false,
      },
      {
        "spotId": 7,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-724728953051983834/original/dad8a06c-4815-4d4d-9880-4c3686580c5f.jpeg?im_w=720',
        "preview": false,
      },
      {
        "spotId": 7,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-724728953051983834/original/402ad4f0-a920-4038-9b30-3eef675bb556.jpeg?im_w=720',
        "preview": false,
      },
      {
        "spotId": 7,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-724728953051983834/original/3a75883c-2474-449e-8304-0f87a2a72dcb.jpeg?im_w=720',
        "preview": false,
      },
      /********** END OF SPOT 7 IMAGES **********/

      {
        "spotId": 8,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-16722630/original/26505534-fe43-4912-ab2f-3bb01e07d60f.jpeg?im_w=1200',
        "preview": true,
      },
      {
        "spotId": 8,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-16722630/original/d1a6b1ae-d559-40bf-bbd9-417d0e0163ac.jpeg?im_w=720',
        "preview": false,
      },
      {
        "spotId": 8,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-16722630/original/8db4b2d4-a93d-4d5b-9889-1b3cb146ecc0.jpeg?im_w=720',
        "preview": false,
      },
      {
        "spotId": 8,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-16722630/original/4df15b56-337d-49d3-8a49-58bda0d4235c.jpeg?im_w=720',
        "preview": false,
      },
      {
        "spotId": 8,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-16722630/original/d4c2c7e8-4b2f-4072-9296-92ecb2a6831e.jpeg?im_w=720',
        "preview": false,
      },
      /********** END OF SPOT 8 IMAGES **********/

      {
        "spotId": 9,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-750576225319975254/original/272f38e6-6c69-450c-9f2f-9630f43ba0ae.jpeg?im_w=1200',
        "preview": true,
      },
      {
        "spotId": 9,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-750576225319975254/original/9a507f76-3509-4d9a-9b06-5b7d7c42b048.jpeg?im_w=720',
        "preview": false,
      },
      {
        "spotId": 9,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-750576225319975254/original/62094618-2f92-44ed-a741-3b24824270e9.jpeg?im_w=720',
        "preview": false,
      },
      {
        "spotId": 9,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-750576225319975254/original/6fb8bd1f-0169-4c0e-b2bb-af547394f5ba.jpeg?im_w=720',
        "preview": false,
      },
      {
        "spotId": 9,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-750576225319975254/original/88425f4e-af0e-4abf-b4ec-c5b107f972ff.jpeg?im_w=720',
        "preview": false,
      },
      /********** END OF SPOT 9 IMAGES **********/

      {
        "spotId": 10,
        "url": 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-731496994535027886/original/0b1aa9e2-9014-41a5-ac50-2af524bc46d3.jpeg?im_w=1200',
        "preview": true,
      },
      {
        "spotId": 10,
        "url": 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-731496994535027886/original/fb5480f5-36fe-4b2d-889f-68d2571f525e.jpeg?im_w=720',
        "preview": false,
      },
      {
        "spotId": 10,
        "url": 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-731496994535027886/original/72456418-ca6f-4c16-97fd-186dbed53a29.jpeg?im_w=720',
        "preview": false,
      },
      {
        "spotId": 10,
        "url": 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-731496994535027886/original/d3554b11-18da-45e3-b838-5abaf6a4b695.jpeg?im_w=720',
        "preview": false,
      },
      {
        "spotId": 10,
        "url": 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-731496994535027886/original/665ab9e4-97aa-47ec-a00d-548c70492720.jpeg?im_w=720',
        "preview": false,
      },
      /********** END OF SPOT 10 IMAGES **********/

      {
        "spotId": 11,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-743613404604684461/original/4af681b4-fd03-4bae-803e-fc929970a4d9.jpeg?im_w=1200',
        "preview": true,
      },
      {
        "spotId": 11,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-743613404604684461/original/18f27e5c-5e91-4d31-848d-c3947c3b7240.jpeg?im_w=720',
        "preview": false,
      },
      {
        "spotId": 11,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-743613404604684461/original/995f16a2-78c2-48b4-a23f-52dc634cc054.jpeg?im_w=720',
        "preview": false,
      },
      {
        "spotId": 11,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-743613404604684461/original/ab987d42-406d-41d3-8e78-fa383884da25.jpeg?im_w=720',
        "preview": false,
      },
      {
        "spotId": 11,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-743613404604684461/original/7f17f73e-ecd7-4b52-a427-8c70073f456a.jpeg?im_w=720',
        "preview": false,
      },
      /********** END OF SPOT 11 IMAGES **********/

      {
        "spotId": 12,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-695502318874576399/original/3ba2f913-ce1a-4a18-b6af-ffcc39fc31a2.jpeg?im_w=1200',
        "preview": true,
      },
      {
        "spotId": 12,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-695502318874576399/original/f33fe5a9-f96d-4e66-a506-4da215791308.jpeg?im_w=720',
        "preview": false,
      },
      {
        "spotId": 12,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-695502318874576399/original/3bcb1a66-97a6-4413-b985-05ea6523c8ef.jpeg?im_w=720',
        "preview": false,
      },
      {
        "spotId": 12,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-695502318874576399/original/51bb7e65-c0a3-4647-950e-cd83a9328194.jpeg?im_w=720',
        "preview": false,
      },
      {
        "spotId": 12,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-695502318874576399/original/38c20c53-efbc-44e8-99a3-829024442a9e.jpeg?im_w=720',
        "preview": false,
      },
      /********** END OF SPOT 12 IMAGES **********/

      {
        "spotId": 13,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-723296792382546007/original/efb08c5b-144a-4707-bdc3-d8e5b9316346.jpeg?im_w=1200',
        "preview": true,
      },
      {
        "spotId": 13,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-723296792382546007/original/26f70e7f-e384-42ff-8b53-ecdf0a9327fa.jpeg?im_w=720',
        "preview": false,
      },
      {
        "spotId": 13,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-723296792382546007/original/649d69a9-5041-44d5-b41b-7976e7909f9a.jpeg?im_w=720',
        "preview": false,
      },
      {
        "spotId": 13,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-723296792382546007/original/205e1d82-53ae-4ab2-bde7-30066675af27.jpeg?im_w=720',
        "preview": false,
      },
      {
        "spotId": 13,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-723296792382546007/original/0ff22565-de22-4c33-9687-9ac07822c526.jpeg?im_w=720',
        "preview": false,
      },
      /********** END OF SPOT 13 IMAGES **********/

      {
        "spotId": 14,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-561011675914650918/original/0b44e991-21a3-4082-bad1-11ec554df5af.jpeg?im_w=1200',
        "preview": true,
      },
      {
        "spotId": 14,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-561011675914650918/original/bb945802-410a-41e5-bead-82a58ed955a2.jpeg?im_w=720',
        "preview": false,
      },
      {
        "spotId": 14,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-561011675914650918/original/0de186a1-735d-4d2f-82c8-fa66b82df966.jpeg?im_w=720',
        "preview": false,
      },
      {
        "spotId": 14,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-561011675914650918/original/9da55c4e-0e21-4f9f-9757-c248c4cb1270.jpeg?im_w=720',
        "preview": false,
      },
      {
        "spotId": 14,
        "url": 'https://a0.muscache.com/im/pictures/miso/Hosting-561011675914650918/original/23f3297f-2659-474e-9035-bd592694ddb9.jpeg?im_w=720',
        "preview": false,
      },
      /********** END OF SPOT 14 IMAGES **********/


      // {
      //   "spotId": ,
      //   "url": '',
      //   "preview": true,
      // },
      // {
      //   "spotId": ,
      //   "url": '',
      //   "preview": false,
      // },
      // {
      //   "spotId": ,
      //   "url": '',
      //   "preview": false,
      // },
      // {
      //   "spotId": ,
      //   "url": '',
      //   "preview": false,
      // },
      // {
      //   "spotId": ,
      //   "url": '',
      //   "preview": false,
      // },
      
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('SpotImages', null, {});
  }
};
