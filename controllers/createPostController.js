const BlogPostMD = require('../models/BlogPostMD');
const convertMdToHtml = require('../convertMdToHtml');

module.exports = async (req, res) => {

    if(!req.files || req.files.length < 1){
        req.flash('warning', 'Markdown file is required.');
        return res.redirect('/post/new');
    } 

    // currently, the function takes filename minus extension. I need to fix it first
    // or, because the file is already created and saved in the directory, all I have to do is to take the name of the file and pass it ?
    const filenameRe = /^(.*?)(?=\..*$)/;
    const filename = filenameRe.exec(req.files.mdFile.name)[1];
    const result = await convertMdToHtml(filename);

    const newPost = await BlogPostMD.create({
        title: result.title,
        body: result.body,
        imagePath: 'home-bg.jpg',
        authorId: req.session.user ? req.session.user._id: null
    });

    console.log(newPost);
    req.flash('info', `New Post ${result.title} is created.`);
    res.redirect('/');
};