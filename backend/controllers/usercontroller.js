
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'fallback_secret_key', { expiresIn: '30d' });
};

// @desc    Register a new customer account
// @route   POST /api/users/register
exports.registerUser = async (req, res) => {
  console.log('REGISTER HIT:', req.body); // ← debug line
  const { name, email, password } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'An account with this email already exists.' });

    const user = await User.create({ name, email, password });
    res.status(201).json({
      message: 'Account created beautifully!',
      token: generateToken(user._id),
      user: { id: user._id, name: user.name, email: user.email, role: user.role }
    });

  } catch (err) {
    console.log('REGISTER ERROR:', err.message); // ← will show exact error
    res.status(500).json({ message: err.message });
  }
};

// @desc    Authenticate user details and log in
// @route   POST /api/users/login
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      res.json({
        message: 'Welcome back!',
        token: generateToken(user._id),
        user: { id: user._id, name: user.name, email: user.email, role: user.role }
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password combination.' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Login execution failed.', error: err.message });
  }
};