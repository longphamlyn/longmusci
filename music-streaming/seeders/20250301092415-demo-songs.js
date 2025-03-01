'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Songs', [
      {
        Title: 'Blank Space',
        ArtistID: 1, // Taylor Swift
        AlbumID: 1,  // 1989
        Duration: 231,
        AudioURL: 'https://example.com/blank_space.mp3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Title: 'Shape of You',
        ArtistID: 2, // Ed Sheeran
        AlbumID: 2,  // Divide
        Duration: 233,
        AudioURL: 'https://example.com/shape_of_you.mp3',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Songs', null, {});
  }
};
