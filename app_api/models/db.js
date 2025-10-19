const mongoose = require('mongoose');
require('dotenv').config();

const dbURI = process.env.MONGODB_URI

mongoose.connect(dbURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

require('./locations');
require('./others');

console.log('Models registered:', mongoose.modelNames());
module.exports = mongoose;