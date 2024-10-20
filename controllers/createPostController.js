const BlogPost = require('../models/BlogPost');
const path = require('path');
const webp = require('webp-converter');
const fs = require('fs');

webp.grant_permission();

module.exports = async (req, res) => {
    // console.log(req.body);
    // console.log(req.body.blogImage);
    // console.log(req.files);
    // req.files.blogImage.mv()
    // console.log(path.resolve(__dirname,'../public/assets/img', req.files.blogImage.name));


    const reExtension = /\.[^/.]+$/;
    const origExtention = req.files.blogImage.name.match(reExtension);
    const imageId = req.files.blogImage.name.replace(reExtension,"");
    const origPath = path.resolve(__dirname,'../public/assets/img', imageId + origExtention);
    const webpPath = path.resolve(__dirname,'../public/assets/img/webp', imageId + '.webp');

    await req.files.blogImage.mv(path.resolve(origPath));
    await webp.cwebp(origPath, webpPath,'-q 80');

    fs.unlink(origPath, error=>{console.log(error)});


    // console.log(`imageId: ${imageId}`);

    const newPost = await BlogPost.create({
        title: req.body.title,
        body: req.body.body,
        imagePath: imageId + '.webp'
    });
    console.log(newPost);
    res.redirect('/');
};