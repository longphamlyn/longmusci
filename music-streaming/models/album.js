'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    static associate(models) {
      Album.belongsTo(models.Artist, { foreignKey: 'ArtistID' });
      Album.hasMany(models.Song, { foreignKey: 'AlbumID' }); // Chỉ định nghĩa quan hệ của Album
    }
  }
  
  Album.init(
    {
      Title: DataTypes.STRING,
      ArtistID: DataTypes.INTEGER,
      ReleaseDate: DataTypes.DATE,
      ImageURL: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Album',
    }
  );
  
  return Album;
};
