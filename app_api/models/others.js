let mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNo: { type: String, required: true },
    address: { type: String, required: true },
    passwordHash: { type: String, required: true }
});

module.exports = mongoose.model.User || mongoose.model('User', UserSchema);