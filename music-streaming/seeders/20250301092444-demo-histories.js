'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Histories', [
      {
        UserID: 1, // Giả sử người dùng có ID = 1
        SongID: 2, // Giả sử bài hát có ID = 2
        PlayedAt: new Date(),
      },
      {
        UserID: 2, // Giả sử người dùng có ID = 2
        SongID: 1, // Nghe bài hát có ID = 1
        PlayedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Histories', null, {});
  },
};
