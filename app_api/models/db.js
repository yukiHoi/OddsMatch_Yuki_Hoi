const mongoose = require('mongoose');
const dbURI = "mongodb+srv://iokiMTU:Sheisbops13@cluster0.lxur4l9.mongodb.net/OddMatch?retryWrites=true&w=majority";

mongoose.connect(dbURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

require('./locations');
require('./others');

console.log('Models registered:', mongoose.modelNames());
module.exports = mongoose;