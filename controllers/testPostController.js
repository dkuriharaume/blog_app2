const BlogPostMD = require('../models/BlogPostMD');
const User = require('../models/User');

module.exports = async (req, res) =>{

    const posts = await BlogPostMD.find({});
    const post = posts[0];

    const users = await User.find({name: 'dkurihara'});
    const user = users[0];

    res.render('post',{
        title: post.title,
        pageHeaderH1: post.title,
        pageHeaderSub: 'testing this post',
        body: post.body,
        postAuthorName: user.name,
        postPage: true,
        postDate: post.postDate.toDateString(),
        bgImage: post.imagePath
    });

};