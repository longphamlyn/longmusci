const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../models");
require("dotenv").config();

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Kiểm tra xem email đã tồn tại chưa
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: "Email đã được sử dụng!" });
        }
        if (!password) {
            return res.status(400).json({ message: "Mật khẩu không được để trống!" });
        }
        // Mã hóa mật khẩu
        const hashedPassword = await bcrypt.hash(password, 10);

        // Tạo user mới
        const newUser = await User.create({
            Username: name,
            Email: email,
            PasswordHash: hashedPassword,
            AvatarURL: "https://example.com/default-avatar.jpg",
            Role: "user"
        });

        // Tạo token
        const token = jwt.sign(
            { userId: newUser.id, email: newUser.email },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );
        res.status(201).json({ message: "Đăng ký thành công!", token });
    } catch (error) {
        return res.status(500).json({ message: "Có lỗi xảy ra, vui lòng thử lại sau!" });
    }
};

module.exports = { register };
