'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Albums', [
      {
        Title: '1989',
        ArtistID: 1, // Taylor Swift
        ReleaseDate: '2014-10-27',
        ImageURL: 'https://example.com/1989.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Title: 'Divide',
        ArtistID: 2, // Ed Sheeran
        ReleaseDate: '2017-03-03',
        ImageURL: 'https://example.com/divide.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Albums', null, {});
  }
};
