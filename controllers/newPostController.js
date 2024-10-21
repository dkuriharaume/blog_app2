module.exports = (req, res) => {
    // console.log(req.flash('data'));
    res.render('createPost', {
        title: 'Create New Post',
        pageHeaderH1: 'Create New Post',
        pageHeaderSub: 'Fill in the form to create an awesome new blogpost !',
        bgImage: 'contact-bg.jpg',
        user: req.session.user,
        warning: req.flash('warning'),
        data: req.flash('data')[0]
    });
};