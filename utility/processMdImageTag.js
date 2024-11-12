const {resolve} = require('path');

module.exports = (source, doc) =>{

    const imageData = doc.postData.imageData;
    let result = source;

    for(var i = 0; i < imageData.length; i ++){

        const datum = imageData[i];
        const imagePath = resolve('/postData/', doc._id.toString(),'img', datum.id + '.webp');
        const dest = `![${datum.label}](${imagePath})`
        result = result.replace(new RegExp(datum.match), dest)

    }

    return result;
}