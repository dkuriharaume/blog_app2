module.exports = (req, res) =>{

    res.render('notfound',{
        title: 'Page Not Found'
        ,pageHeaderH1: 'Page Not Found'
        ,pageHeaderSub: 'Something is not right'
        ,bgImage: 'home-bg.jpg'
    });

};