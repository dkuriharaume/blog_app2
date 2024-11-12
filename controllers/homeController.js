const BlogPost = require('../models/BlogPost');
const User = require('../models/User');

module.exports = async (req, res) =>{

    //don't forget to populate with userId
    // but I'm not so sure that is required...it looks fine without it

    const blogposts = await BlogPost.find({});
    let authorNames = [];
    for(var i = 0; i < blogposts.length; i ++){
        let authorName; 

        try {

         const author = await User.findById(blogposts[i].authorId);
         if(author) authorName = author.name;
         else authorName = 'unknown author';

        }
        catch (e){
            console.log(e);

        }
        authorNames.push(authorName);
    }

    const user = req.session.user;

    res.render('index', {
        title: 'Home',
        pageHeaderH1: 'Blog Test 2',
        pageHeaderSub: 'Relearning until I\'m good',
        bgImage: 'home-bg.jpg',
        blogposts: blogposts,
        authorNames: authorNames,
        user: user,
        info: req.flash('info')
    });
};