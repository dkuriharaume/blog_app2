const fs = require('fs');
const md = require('marked');
const convertMdToHtml = require('../convertMdToHtml');

module.exports = async ()=>{

    const input = './postData/md/test.md';
    const output = './postData/html/test.html';

    const dir = 'assets/img/';
    const re = /(?<=src=(['"]))(.*?)(?=\1)/g;
    
    fs.readFile(input,'utf-8',(err, data)=>{
        if(err) console.log(err);

        let html = md.parse(data);

        const result = html.replace(re, dir + "$2");

        const titleRe = /(?<=^<!--\s?title:\s+)(.*?)(?=\s?-->)/;
        const title = titleRe.exec(result)[1];
        console.log(title + ' is created');

        fs.writeFile(output,result,(error)=>{
            console.log(error);
        });
    });

    fs.readFile(output, 'utf-8', (error, data)=>{

        if(error) console.log(error);
        
        console.log(data);

    });

    const result = await convertMdToHtml('test');

    console.log(result);

}