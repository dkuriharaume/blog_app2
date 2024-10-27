const mongoose = require('mongoose');
const User = require('./models/User');
// const BlogPost = require('./models/BlogPost');
// const path = require('path');
// const webp = require('webp-converter');
// const fs = require('fs');
// const md = require('marked');

const convertMdToHtml = require('./convertMdToHtml');

// webp.grant_permission();

main().catch(e => {console.log(e)});

async function main(){

    // #region Database

    await mongoose.connect('mongodb://127.0.0.1:27017/blogTest2');

    // BlogPost.create({
    //     title: "Test Post 2",
    //     body: "This is a testing post. Does it work?"
    // });

    // User.create({
    //     name: 'Daisuke Kurihara',
    //     password: 'korneria09'
    // });
    // #endregion
    
    // #region webp conversion
    // const imagePath = 'public/assets/img/';
    // const imageId = 'DSC02688';
    // const input = imagePath + imageId + '.jpg';
    // const output = imagePath + 'test' + '.webp';

    // webp.cwebp(input, output, '-q 80', logging="-v");
    // #endregion

    // #region fs
    
    // fs.unlink(path.resolve(__dirname,imagePath,imageId + '.jpg'),error=>{console.log(error)});

    // #endregion

    // #region regex


    // const test = '<img src="../../public/assets/img/D12345432.webp" alt="image" /> <img src="../../public/assets/img/someother.webp" alt="image" />';
    // const re = /(?<=src=(['"]))(.*?)(?=\1)/g;
    // const result = test.replace(re,"Hi: "+ "$2");
    // console.log(result);

    // #endregion

    // #region markdown
    
    // const input = './postData/md/test.md';
    // const output = './postData/html/test.html';

    // const dir = 'assets/img/';
    // const re = /(?<=src=(['"]))(.*?)(?=\1)/g;

    // fs.readFile(input,'utf-8',(err, data)=>{
    //     if(err) console.log(err);

    //     let html = md.parse(data);

    //     const result = html.replace(re, dir + "$2");

    //     const titleRe = /(?<=^<!--\s?title:\s+)(.*?)(?=\s?-->)/;
    //     const title = titleRe.exec(result)[1];
    //     console.log(title + ' is created');

    //     fs.writeFile(output,result,(error)=>{
    //         console.log(error);
    //     });
    // });

    // fs.readFile(output, 'utf-8', (error, data)=>{

    //     if(error) console.log(error);
        
    //     console.log(data);

    // });

    // const result = await convertMdToHtml('test');

    // console.log(result);

    // #endregion

    // #region BlogPostMD

    const BlogPostMD = require('./models/BlogPostMD');

    const user = await User.find({name: 'dkurihara'});
    // console.log(user[0].name);

    const post = await convertMdToHtml('test');

    // console.log(post.title, post.body)
    try{
        // const newPost = user._id;
        const newPost = await BlogPostMD.create({
            title: post.title,
            body: post.body,
            authorId: user[0]._id,
            postDate: new Date(),
            imagePath:'webp/DSC02832.webp'
        });
        console.log(newPost);

    }catch (e){
        console.error(e);
    }


    // #endregion

}