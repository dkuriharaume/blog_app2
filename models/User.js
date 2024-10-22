const mongoose = require('mongoose');
// const errorHandler = require('mongoose-mongodb-errors');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// userSchema.plugin(errorHandler);

const User = mongoose.model('User', userSchema);
module.exports = User;