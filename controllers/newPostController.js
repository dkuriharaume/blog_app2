module.exports = (req, res) => {
    res.render('createPostMD', {
        title: 'Create New Post',
        pageHeaderH1: 'Create New Post',
        pageHeaderSub: 'Upload a Markdown file to create a new post',
        bgImage: 'contact-bg.jpg',
        user: req.session.user,
        warning: req.flash('warning'),
        data: req.flash('data')[0]
    });
};