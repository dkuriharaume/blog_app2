const marked = require('marked');

module.exports = (source)=>{

    const renderer = {
        image({href,text}){

            return `<img src='${href}' id='${text.replace(/\s/g,"_")}' alt='${text}' class='image-fluid' />`;

        }
    };

    marked.use({renderer});
    const result =  marked.parse(source, {breaks:true})
    console.log(typeof result)
    return result;

}