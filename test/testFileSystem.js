const fs = require('fs');
const path = require('path');
// This is a file system callback API
module.exports = ()=>{

    fs.unlink(path.resolve(__dirname,imagePath,imageId + '.jpg'),error=>{console.log(error)});

}