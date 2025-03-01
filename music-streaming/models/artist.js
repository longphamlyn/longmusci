'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Artist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Artist.hasMany(models.Album, { foreignKey: 'ArtistID' });
      Artist.hasMany(models.Song, { foreignKey: 'ArtistID' });
    }
  }
  Artist.init({
    Name: DataTypes.STRING,
    Biography: DataTypes.TEXT,
    ImageURL: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Artist',
  });
  return Artist;
};