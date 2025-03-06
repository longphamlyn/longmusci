const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middlewares/authMiddleware");
const { register, login, validateRegister } = require("../controllers/authController");

// Route đăng ký
router.post("/register", validateRegister, register);

// Route đăng nhập
router.post("/login", login);

// Route lấy thông tin user (cần xác thực)
router.get("/profile", authMiddleware, async (req, res) => {
    try {
        const user = await User.findByPk(req.user.id, { attributes: { exclude: ["password_hash"] } });
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Lỗi server" });
    }
});     

module.exports = router;
