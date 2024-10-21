
module.exports = (req, res) =>{
    res.render('newUser', {
        title: 'Create User',
        pageHeaderH1: 'Create User',
        pageHeaderSub: 'Fill in the form and submit',
        postPage: false,
        bgImage: 'home-bg.jpg',
        user: req.session.user
    });
}