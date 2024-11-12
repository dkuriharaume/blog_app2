const { match } = require('assert');
const {readFile} = require('fs/promises');
const path = require('path');

module.exports = async ()=>{

    // const path = '../postData/md/test5.md';

    try{

        const filePath = path.resolve(__dirname,'../postData/md/test5.md');
        const source = await readFile(filePath,{encoding: 'utf8'});
        // console.log(source);

        const re = /^<!-- image:\s*(.*[^\s])\s*-->\s?$/mg;
        // console.log(source.match(re));
        // console.log(re.lastIndex);

        const matchCount = source.match(re).length;
        re.lastIndex = 0;
        // for(var i = 0; i < source.match(re).length; i++){
        for(var i = 0; i < matchCount; i++){

            console.log(re.lastIndex);
            console.log(`tested ${i + 1} times`,re.exec(source)[1]);

        }
        // console.log(re.lastIndex);
        // console.log(re.exec(source));
        // console.log(re.lastIndex);
        // console.log(re.exec(source));
        // console.log(re.lastIndex);
        // console.log(re.exec(source));
    }
    catch(e){
        console.log(e);
    }
}