const mongoose = require('mongoose');
const BlogPost2Schema = new mongoose.Schema({

    title:{
        type: String,
        required: true
    },
    postData: {
        filename: {
            type: String,
            required: true,
        },
        imageData: [
            {
                match: String,
                label: String,
                id: String
            }
        ]
    },
    authorId: {
        type: mongoose.ObjectId,
        required: true
    },
    postDate: {
        type: Date,
        default: new Date()
    },
});

module.exports = mongoose.model('BlogPost2', BlogPost2Schema);