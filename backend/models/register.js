const mongoose = require('mongoose');

const registerSchema = mongoose.Schema({
    uname: String,
    email: String,
    pwd: String
});

module.exports = mongoose.model('Register', registerSchema);