module.exports = (req, res) =>{

    // console.log(req.session.postData);

    res.render('imagesUpload', {
        title: 'images upload',
        pageHeaderH1: 'Upload Images',
        pageHeaderSub: 'select images for each image labels',
        bgImage: 'home-bg.jpg',
        imageData: req.session.doc?.postData.imageData
    });
    // if(!req.session?.imageLabels){
    //     req.flash('warning', 'image labels cannot be extracted from the MD file.');
    //     res.redirect('/post/test');
    // } else {
    //     res.render('imagesUpload', {
    //         title: 'images upload',
    //         pageHeaderH1: 'Upload Images',
    //         pageHeaderSub: 'select images for each image labels',
    //         bgImage: 'home-bg.jpg',
    //         imageLabels: req.session.imageLabels
    //     });
    // }

};