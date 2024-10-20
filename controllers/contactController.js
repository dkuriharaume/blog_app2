module.exports = (req, res)=>{
    res.render('contact', {
        title: 'Contact',
        pageHeaderH1: 'Contact Me',
        pageHeaderSub: 'Have questions? I have answers.',
        bgImage: 'contact-bg.jpg'
    });
};
