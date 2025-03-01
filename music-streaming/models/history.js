'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    /**
     * Định nghĩa các quan hệ giữa bảng History với các bảng khác.
     */
    static associate(models) {
      History.belongsTo(models.User, { foreignKey: 'UserID', onDelete: 'CASCADE' });
      History.belongsTo(models.Song, { foreignKey: 'SongID', onDelete: 'CASCADE' });
    }
  }

  History.init(
    {
      UserID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      SongID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Songs',
          key: 'id',
        },
      },
      PlayedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: 'History',
      timestamps: false, // Không cần timestamps (createdAt, updatedAt)
    }
  );

  return History;
};
