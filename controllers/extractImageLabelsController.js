const {readFile, mkdir} = require('fs/promises');
const {resolve} = require('path');
const getPostTitle = require('../getPostTitle');
const getImageData = require('../getImageData');
const BlogPost2 = require('../models/BlogPost2');
const parseFileName = require('../parseFileName');
const mongoose = require('mongoose');
const User = require('../models/User');

module.exports = async (req, res)=>{

    // get files
    const keys = Object.keys(req.files); 

    for(var i = 0; i < keys.length; i ++){

        const key = keys[i];
        const file = req.files[key];

        try {
            await mongoose.connect('mongodb://127.0.0.1:27017/blogTest2');

            const document = await BlogPost2.create({
                title: 'tmp',
                postData: {
                    filename: parseFileName(file.name).name,
                    imageData: []
                },
                // authorId: new mongoose.Types.ObjectId(),
                authorId: req.session.user._id
            });

            //create directory with the id as its name

            const postDataPath = resolve(__dirname, '../public/postData', document._id.toString());
            await mkdir(postDataPath);
            
            //populate the document

            const result = await readFile(file.tempFilePath, {encoding: 'utf8'});

            const postTitle = getPostTitle(result);
            const imageData = getImageData(result);

            document.title = postTitle;
            document.postData.imageData = imageData;
            req.session.doc = document;

            await document.save();

            // save md file in the directory

            await file.mv(resolve(postDataPath, file.name))

            return res.redirect('/post/uploadImages');

        }
        catch(e){console.error(e);}

    }
    res.redirect('/');
}