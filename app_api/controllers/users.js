// app_api/controllers/users.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // or 'bcrypt'
const User = mongoose.model('User');

// POST /api/users
// create new user storage with hashed password and return user ID
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
// fetch user and verify password
const userLogIn = async (req, res) => {
  console.log('[POST /api/users/login] body:', req.body);
  try {
    const { email, password } = req.body || {};
    if (!email || !password) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    res.status(200).json({ message: 'Login successful', user: { _id: user._id } });
  } catch (err) {
    console.error('[userLogIn]', err);
    res.status(500).send('Login failed');
  }
};
module.exports = {userCreate,userLogIn
};