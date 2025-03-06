require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false, // Ẩn log SQL nếu không cần thiết
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ Kết nối database thành công!');
    } catch (error) {
        console.error('❌ Lỗi kết nối database:', error);
        process.exit(1);
    }
};

module.exports = { sequelize, connectDB };
