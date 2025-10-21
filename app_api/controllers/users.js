// app_api/controllers/users.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // or 'bcrypt'
const User = mongoose.model('User');

// POST /api/users
const userCreate = async (req, res) => {
  console.log('[POST /api/users] body:', req.body);
  try {
    const { firstName, lastName, email, phoneNo, address, password } = req.body || {};
    if (!firstName || !lastName || !email || !phoneNo || !address || !password) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
    const passwordHash = await bcrypt.hash(password, 10);
    const user = await User.create({ firstName, lastName, email, phoneNo, address, passwordHash });
    res.status(201).json({ 
      message: 'User created successfully',
      user: { _id: user._id }
    });
  } catch (err) {
    console.error('[userCreate]', err);
    if (err?.code === 11000) return res.status(409).json({ message: 'Email already exists' });
    res.status(500).send('User creation failed');
  }
};

// GET /api/users/by-email/:email
const getUserByEmail = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email }).lean();
    if (!user) return res.status(404).send('User not found');
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
};

// GET /api/users/by-firstname/:firstName
const getUserByFirstName = async (req, res) => {
  try {
    const user = await User.findOne({ firstName: req.params.firstName }).lean();
    if (!user) return res.status(404).send('User not found');
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
};

module.exports = { userCreate, getUserByEmail, getUserByFirstName };
