'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Artists', [
      {
        Name: 'Taylor Swift',
        Biography: 'An American singer-songwriter.',
        ImageURL: 'https://example.com/taylor.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Name: 'Ed Sheeran',
        Biography: 'An English singer-songwriter.',
        ImageURL: 'https://example.com/ed.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Artists', null, {});
  }
};
