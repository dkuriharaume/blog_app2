module.exports = (req, res) => {
    res.render('createPost', {
        title: 'Create New Post',
        pageHeaderH1: 'Create New Post',
        pageHeaderSub: 'Fill in the form',
        bgImage: 'contact-bg.jpg'
    });
};