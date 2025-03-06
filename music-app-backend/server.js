require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { connectDB, syncDatabase } = require('./src/models');
const authRoutes = require("./src/routes/authRoutes");


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Kết nối Database
connectDB().then(syncDatabase);

// Route đơn giản kiểm tra server
app.get('/', (req, res) => {
    res.send('🎵 Music App API is running...');
});

app.use("/api/auth", authRoutes);

// Lắng nghe server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
