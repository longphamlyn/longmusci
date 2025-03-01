'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        Username: 'john_doe',
        Email: 'john@example.com',
        PasswordHash: 'hashed_password_1',
        AvatarURL: 'https://example.com/avatar1.jpg',
        Role: 'user',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Username: 'jane_doe',
        Email: 'jane@example.com',
        PasswordHash: 'hashed_password_2',
        AvatarURL: 'https://example.com/avatar2.jpg',
        Role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
