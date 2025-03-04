// Nạp các biến môi trường từ file .env (dotenv hữu ích để giữ thông tin nhạy cảm như khóa API hoặc URL cơ sở dữ liệu).
require('dotenv').config();

// Nhập các thư viện cần thiết để xây dựng server và xử lý yêu cầu.
const express = require('express');        // Express là một framework web cho Node.js.
const cors = require('cors');              // CORS (Cross-Origin Resource Sharing) là một middleware để cho phép hoặc hạn chế tài nguyên được yêu cầu từ các miền khác nhau.
const bodyParser = require('body-parser'); // Body-parser là một middleware để phân tích các body trong yêu cầu đến (cho JSON, văn bản, v.v.).
const { sequelize } = require('./models'); // Nhập đối tượng sequelize từ file models, chịu trách nhiệm tương tác với cơ sở dữ liệu.
const authRoutes = require("./routes/userRoutes");

// Tạo một ứng dụng Express.
const app = express();
// Đặt cổng (port) cho ứng dụng, lấy giá trị từ biến môi trường hoặc mặc định là 5000.
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());            // Sử dụng middleware CORS để cho phép các yêu cầu từ các miền khác.
app.use(bodyParser.json()); // Sử dụng body-parser để tự động phân tích các yêu cầu JSON gửi đến.

// Định nghĩa một route kiểm tra xem server có hoạt động không. Khi truy cập vào route này, server sẽ trả về một thông điệp đơn giản.
app.get('/', (req, res) => {
  res.send('Music Streaming API is running...');
});
app.use("/api/auth", authRoutes);
// Kết nối với cơ sở dữ liệu và khởi động server.
// sequelize.sync() đảm bảo rằng Sequelize đồng bộ với cơ sở dữ liệu, bao gồm các mô hình và bảng.
sequelize.sync().then(() => {
  // Khi cơ sở dữ liệu đã được đồng bộ, bắt đầu server và lắng nghe trên cổng đã chỉ định.
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}).catch(err => {
  // Nếu có lỗi kết nối với cơ sở dữ liệu, in ra lỗi.
  console.error('Unable to connect to the database:', err);
});
