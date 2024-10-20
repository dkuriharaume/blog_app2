const BlogPost = require('../models/BlogPost');

module.exports = async (req, res)=>{ 

    const blogpost = await BlogPost.findById(req.params.id);

    let imagePath = 'home-bg.jpg';
    if(blogpost.imagePath != null && blogpost.imagePath != '')
        imagePath = 'webp/' + blogpost.imagePath;

    res.render('post', {
        title: blogpost.title,
        pageHeaderH1: blogpost.title,
        body: blogpost.body,
        postPage: true,
        bgImage: imagePath
    });
};
