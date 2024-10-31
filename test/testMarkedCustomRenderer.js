const marked = require('marked');

module.exports = async ()=>{

    const renderer = {
        image({href,text}){

            return `<img src='${href}' id='${text}' alt='${text}' class='image-fluid' />`;

        }
    };

    /**
     * put the text of md image to the id of image element of corresponding html
     * leaving the values of source attribute of them with placeholders
     * 
     * no, that's not what I want.
     * First, parse MD and extract all the custom comment where images are to be inserted.
     * Then, show forms that let images to be uploaded to the server
     * And, replace image comments with appropriate image elements using custom renderer, as demonstrated above.
     */

    marked.use({renderer});

    const {readFile} = require('fs/promises');

    let source;
    try{

        source = await readFile('./postData/md/test.md',{encoding:'utf8'});

    }catch(e){console.log(e)}
    
    const result = marked.parse(source,{breaks:true});
    console.log(result);

}