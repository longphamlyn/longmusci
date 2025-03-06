const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    password_hash: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    avatar_url: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    role: {
        type: DataTypes.ENUM('user', 'premium', 'artist', 'admin'),
        defaultValue: 'user'
    },
    status: {
        type: DataTypes.ENUM('active', 'banned', 'pending'),
        defaultValue: 'active'
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'Users',
    timestamps: false
});

module.exports = User;
