const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult, check } = require("express-validator");
const { User } = require("../models");
require("dotenv").config();

exports.validateRegister = [
    check("username", "Tên người dùng là bắt buộc").not().isEmpty(),
    check("email", "Email không hợp lệ").isEmail(),
    check("password", "Mật khẩu phải có ít nhất 6 ký tự").isLength({ min: 6 }),
];

// Đăng ký người dùng
exports.register = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { username, email, password } = req.body;

        // Kiểm tra email đã tồn tại chưa
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: "Email đã được sử dụng" });
        }

        // Hash mật khẩu
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Tạo user mới
        const newUser = await User.create({
            username,
            email,
            password_hash: hashedPassword,
        });

        res.status(201).json({ message: "Đăng ký thành công", user: newUser });
    } catch (error) {
        res.status(500).json({ message: "Lỗi server", error: error.message });
    }
};

// Đăng nhập người dùng
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Kiểm tra user có tồn tại không
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(400).json({ message: "Email hoặc mật khẩu không đúng" });
        }

        // Kiểm tra mật khẩu
        const isMatch = await bcrypt.compare(password, user.password_hash);
        if (!isMatch) {
            return res.status(400).json({ message: "Email hoặc mật khẩu không đúng" });
        }

        // Tạo JWT token
        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });

        res.json({ message: "Đăng nhập thành công", token, user });
    } catch (error) {
        res.status(500).json({ message: "Lỗi server", error: error.message });
    }
};
