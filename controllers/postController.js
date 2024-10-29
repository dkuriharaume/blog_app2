const BlogPostMD = require('../models/BlogPostMD');
const User = require('../models/User');

module.exports = async (req, res)=>{ 

    const blogpost = await BlogPostMD.findById(req.params.id);

    let imagePath = 'home-bg.jpg';
    if(blogpost.imagePath != null && blogpost.imagePath != ''){
        imagePath = blogpost.imagePath;
    }

    let postAuthor;
    try{
        postAuthor = await User.findById(blogpost.authorId);
    }
    catch(e) {
        console.log(e);
    }

    res.render('post', {
        title: blogpost.title,
        pageHeaderH1: blogpost.title,
        body: blogpost.body,
        postAuthorName: postAuthor ? postAuthor.name : 'unknown author',
        postDate: blogpost.postDate.toDateString(),
        postPage: true,
        bgImage: imagePath,
        user: req.session.user
    });
};
