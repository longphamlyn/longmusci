'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Playlists', [
      { UserID: 1, Name: 'Top Hits 2024', CreatedAt: new Date(), UpdatedAt: new Date() },
      { UserID: 2, Name: 'Lofi Chill', CreatedAt: new Date(), UpdatedAt: new Date() },
      { UserID: 3, Name: 'Workout Music', CreatedAt: new Date(), UpdatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Playlists', null, {});
  },
};
