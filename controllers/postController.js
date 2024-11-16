const BlogPost = require('../models/BlogPost');
const User = require('../models/User');
const {resolve} = require('path')
const {readFile} = require('fs/promises')

module.exports = async (req, res)=>{ 

    const postPath = resolve(__dirname, '../public/postData', req.params.id)
    const bgImagePath = resolve('/postData', req.params.id,'img', 'post_bg.webp')

    let blogpost;
    let postAuthor;

    try{
        blogpost = await BlogPost.findById(req.params.id)
       postAuthor = await User.findById(blogpost.authorId)
        // req.session.user = postAuthor
    }
    catch(e) {
        console.log(e);
    }

    let body  
    try {

        const readPath = resolve(postPath, blogpost.postData.filename + '.html')
        body = await readFile(readPath, {encoding: 'utf8'})

    }
    catch(e){console.error(e)}

    res.render('post', {
        title: blogpost.title,
        pageHeaderH1: blogpost.title,
        body: body,
        postAuthorName: postAuthor ? postAuthor.name : 'unknown author',
        postDate: blogpost.postDate.toDateString(),
        postPage: true,
        bgImage: bgImagePath,
        user: req.session.user
    });
};
