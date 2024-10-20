module.exports = (req, res) =>{
    res.render('login', {
        title: 'Login',
        pageHeaderH1: 'Login',
        pageHeaderSub: 'Welcome Back!',
        bgImage: 'home-bg.jpg'
    });
};