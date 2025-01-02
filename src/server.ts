import express, { Request, Response } from 'express';

import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

mongoose.connect(process.env.MONGO_URI || '')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));


// Test Route
app.get('/', (req: Request, res: Response) => {
    res.send('API is running...');
  });
  

// Start Server
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));