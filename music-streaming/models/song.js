'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Song extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Song.belongsTo(models.Artist, { foreignKey: 'ArtistID' });
      Song.belongsTo(models.Album, { foreignKey: 'AlbumID' });
      Song.hasMany(models.Like, { foreignKey: 'SongID' });
      Song.hasMany(models.History, { foreignKey: 'SongID' });
      Song.belongsToMany(models.Playlist, {
        through: models.PlaylistSong,
        foreignKey: 'SongID',
      });
    }
  }
  Song.init({
    Title: DataTypes.STRING,
    ArtistID: DataTypes.INTEGER,
    AlbumID: DataTypes.INTEGER,
    Duration: DataTypes.INTEGER,
    AudioURL: DataTypes.STRING,
    Views: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'Song',
  });
  return Song;
};