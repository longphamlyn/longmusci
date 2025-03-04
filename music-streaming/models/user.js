'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Playlist, { foreignKey: 'UserID' });
      User.hasMany(models.Like, { foreignKey: 'UserID' });
      User.hasMany(models.History, { foreignKey: 'UserID' });
    }
  }
  User.init({
    Username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    PasswordHash: {
      type: DataTypes.STRING,
      allowNull: false
    },
    AvatarURL: {
      type: DataTypes.STRING,
      defaultValue: "https://example.com/default-avatar.jpg"
    },
    Role: {
      type: DataTypes.STRING,
      defaultValue: "user"
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};