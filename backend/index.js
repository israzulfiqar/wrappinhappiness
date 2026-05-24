
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// ─── 1. GLOBAL MIDDLEWARE ────────────────────────────────────────────────────
app.use(cors());
app.use(express.json());

// ─── 2. API ROUTES ───────────────────────────────────────────────────────────
app.use('/api/products', require('./routes/product'));
app.use('/api/studio', require('./routes/studio'));
app.use('/api/users', require('./routes/user'));
app.use('/api/orders', require('./routes/order'));

// ─── 3. BASE TEST ROUTE ──────────────────────────────────────────────────────
app.get('/', (req, res) => {
  res.send('Digital Studio API is running smoothly.');
});

// ─── 4. CONNECT DB THEN START SERVER ─────────────────────────────────────────
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected successfully');
    app.listen(PORT, () => {
      console.log(`Server running beautifully on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection failed:', err.message);
  });