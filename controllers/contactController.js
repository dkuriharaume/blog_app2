module.exports = (req, res)=>{
    const user = req.session.user;
    res.render('contact', {
        title: 'Contact',
        pageHeaderH1: 'Contact Me',
        pageHeaderSub: 'Have questions? I have answers.',
        bgImage: 'contact-bg.jpg',
        user: user
    });
};
