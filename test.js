const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');
const path = require('path');
const webp = require('webp-converter');
const fs = require('fs');

webp.grant_permission();

main().catch(e => {console.log(e)});

async function main(){

    // #region Database

    // await mongoose.connect('mongodb://127.0.0.1:27017/blogTest2');

    // BlogPost.create({
    //     title: "Test Post 2",
    //     body: "This is a testing post. Does it work?"
    // });
    // #endregion
    
    // #region webp conversion
    const imagePath = 'public/assets/img/';
    const imageId = 'DSC02688';
    const input = imagePath + imageId + '.jpg';
    const output = imagePath + 'test' + '.webp';

    // webp.cwebp(input, output, '-q 80', logging="-v");
    // #endregion

    // #region fs
    
    fs.unlink(path.resolve(__dirname,imagePath,imageId + '.jpg'),error=>{console.log(error)});

    // #endregion
}