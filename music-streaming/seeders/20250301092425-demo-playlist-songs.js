'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('playlistsongs', [
      { PlaylistID: 1, SongID: 2, CreatedAt: new Date(), UpdatedAt: new Date() },
      { PlaylistID: 1, SongID: 3, CreatedAt: new Date(), UpdatedAt: new Date() },
      { PlaylistID: 2, SongID: 1, CreatedAt: new Date(), UpdatedAt: new Date() },
      { PlaylistID: 3, SongID: 4, CreatedAt: new Date(), UpdatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Playlist_Songs', null, {});
  },
};
