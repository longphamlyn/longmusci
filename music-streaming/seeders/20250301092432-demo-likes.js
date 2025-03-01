'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Likes', [
      { UserID: 1, SongID: 2, CreatedAt: new Date(), UpdatedAt: new Date() },
      { UserID: 1, SongID: 3, CreatedAt: new Date(), UpdatedAt: new Date() },
      { UserID: 2, SongID: 1, CreatedAt: new Date(), UpdatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Likes', null, {});
  },
};
