module.exports = (req, res)=>{
    res.render('about', {
        title: 'About',
        pageHeaderH1: 'About Me',
        pageHeaderSub: 'This is what I do.',
        bgImage: 'about-bg.jpg'
    });
};
