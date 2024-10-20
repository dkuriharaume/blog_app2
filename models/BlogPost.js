const mongoose = require('mongoose');
const blogPostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    imagePath: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('BlogPost', blogPostSchema);