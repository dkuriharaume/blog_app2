const {readFile} = require('fs/promises');
const {resolve} = require('path');
const BlogPost2 = require('../models/BlogPost2')
const mongoose = require('mongoose')
module.exports = async ()=>{ 

    try{

        await mongoose.connect('mongodb://127.0.0.1:27017/blogTest2');

        const postId = '67270d3bf02a4156e2fcec0b'        
        const doc = await BlogPost2.findById(postId);


        const source = await readFile(resolve(__dirname, '../public/postData/67270d3bf02a4156e2fcec0b/', doc.postData.filename + '.md'),{encoding:'utf8'});

        const mdContent = processMdImageTag(source, doc);
        const htmlContent = convertMdToHtml2(mdContent);
        console.log(htmlContent);


    }
    catch(e){console.error(e)}

}