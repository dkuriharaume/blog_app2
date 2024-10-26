const BlogPost = require('../models/BlogPost');
const User = require('../models/User');

module.exports = async (req, res)=>{ 

    const blogpost = await BlogPost.findById(req.params.id);

    let imagePath = 'home-bg.jpg';
    if(blogpost.imagePath != null && blogpost.imagePath != '')
        imagePath = 'webp/' + blogpost.imagePath;

    let postAuthor;
    try{
        postAuthor = await User.findById(blogpost.userId);
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
