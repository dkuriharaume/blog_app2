const mongoose = require('mongoose');
const BlogPostMDSchema = new mongoose.Schema({

    title:{
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    authorId: {
        type: mongoose.ObjectId,
        required: true
    },
    postDate: {
        type: Date,
        default: new Date()
    },
    imagePath: {
        type: String,
        required: true,
        default: 'home-bg.jpg'
    }

});

module.exports = mongoose.model('BlogPostMD', BlogPostMDSchema);