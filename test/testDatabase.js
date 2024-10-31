const mongoose = require('mongoose');
const BlogPost = require('../models/BlogPost');
const User = require('../models/User');

module.exports = async ()=>{

    await mongoose.connect('mongodb://127.0.0.1:27017/blogTest2');

    BlogPost.create({
        title: "Test Post 2",
        body: "This is a testing post. Does it work?"
    });

    User.create({
        name: 'Daisuke Kurihara',
        password: 'korneria09'
    });

};