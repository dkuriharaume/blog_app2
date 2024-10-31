const mongoose = require('mongoose');
const BlogPostMD = require('../models/BlogPostMD');
const User = require('../models/User');

module.exports = async ()=>{

    await mongoose.connect('mongodb://127.0.0.1:27017/blogTest2');

    const user = await User.find({name: 'dkurihara'});

    const post = await convertMdToHtml('test');

    try{
        const newPost = await BlogPostMD.create({
            title: post.title,
            body: post.body,
            authorId: user[0]._id,
            postDate: new Date(),
            imagePath:'webp/DSC02832.webp'
        });
        console.log(newPost);

    }catch (e){
        console.error(e);
    }

}