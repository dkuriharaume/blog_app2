const BlogPost = require('../models/BlogPost');
const path = require('path');
const webp = require('webp-converter');
const fs = require('fs');

webp.grant_permission();

module.exports = async (req, res) => {

    if(!req.body.title) req.flash('warning', 'Title is required.');
    if(!req.body.body) req.flash('warning', 'Body is required.');
    if(!req.files || req.files.length < 1) req.flash('warning', 'Image is required');
    if(!req.body.title || !req.body.body || !req.files || req.files.length < 1){

        req.flash('data', {
            title: req.body.title,
            body: req.body.body
        });
        return res.redirect('/post/new');
    } 

    const reExtension = /\.[^/.]+$/;
    const origExtention = req.files.blogImage.name.match(reExtension);
    const imageId = req.files.blogImage.name.replace(reExtension,"");
    const origPath = path.resolve(__dirname,'../public/assets/img', imageId + origExtention);
    const webpPath = path.resolve(__dirname,'../public/assets/img/webp', imageId + '.webp');

    await req.files.blogImage.mv(path.resolve(origPath));
    await webp.cwebp(origPath, webpPath,'-q 80');

    fs.unlink(origPath, error=>{console.log(error)});

    const newPost = await BlogPost.create({
        title: req.body.title,
        body: req.body.body,
        imagePath: imageId + '.webp'
    });
    console.log(newPost);
    req.flash('info', `New Post ${req.body.title} is created.`);
    res.redirect('/');
};