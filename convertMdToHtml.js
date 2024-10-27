// const fs = require('fs');
const fs = require('fs/promises');
const md = require('marked');
const path = require('path');

async function convertMdToHtml(filename){

    const input = path.resolve('./postData/md',filename + '.md');
    const output = path.resolve('./postData/html',filename + '.html');

    const imageDir = '/assets/img/';
    const re = /(?<=src=(['"]))(.*?)(?=\1)/g;

    let title;
    let body;

    try{

        const data = await fs.readFile(input, {encoding: 'utf8'});
        
        let html = md.parse(data);
       
        const result = html.replace(re, imageDir + "$2");
        const titleRe = /(?<=^<!--\s?title:\s+)(.*?)(?=\s?-->)/;
        title = titleRe.exec(result)[1];
        console.log(title + ' is created');
        body = result;

        await fs.writeFile(output, result);

    }
    catch(e){
        console.log(e);
    }
    finally {
        return {
            title: title,
            body: body
        };
    }


    // fs.readFile(input,'utf-8',(err, data)=>{
    //     if(err) console.log(err);

    //     let html = md.parse(data);

    //     const result = html.replace(re, imageDir + "$2");

    //     const titleRe = /(?<=^<!--\s?title:\s+)(.*?)(?=\s?-->)/;
    //     const title = titleRe.exec(result)[1];
    //     console.log(title + ' is created');

    //     fs.writeFile(output,result,(error)=>{
    //         console.log(error);
    //     });
    // });
    // return "Hi"
}

module.exports = convertMdToHtml;