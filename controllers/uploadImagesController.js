module.exports = (req, res) =>{

    res.render('imagesUpload', {
        title: 'images upload',
        pageHeaderH1: 'Upload Images',
        pageHeaderSub: 'select images for each image labels',
        bgImage: 'home-bg.jpg',
        imageData: req.session.doc?.postData.imageData
    });
};