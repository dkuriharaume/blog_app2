const BlogPost = require('../models/BlogPost');

module.exports = async (req, res) =>{

    //don't forget to populate with userId
    const blogposts = await BlogPost.find({});
    console.log(`${blogposts.length} documents are found`);
    res.render('index', {
        title: 'Home',
        pageHeaderH1: 'Blog Test 2',
        pageHeaderSub: 'Relearning until I\'m good',
        bgImage: 'home-bg.jpg',
        blogposts: blogposts
    });
};