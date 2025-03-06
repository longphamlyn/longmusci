const { sequelize, connectDB } = require('../config/db');
const User = require('./user');

const syncDatabase = async () => {
    try {
        await sequelize.sync({ alter: true }); // Cập nhật CSDL nếu có thay đổi
        console.log('✅ Database đã được đồng bộ!');
    } catch (error) {
        console.error('❌ Lỗi đồng bộ database:', error);
    }
};

module.exports = { connectDB, syncDatabase, User };
