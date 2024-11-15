// const testDatabase = require('./testDatabase');
// const testWebPConversion = require('./testWebPConversion');
// const testFileSystem = require('./testFileSystem');
// const testRegex = require('./testRegex');
// const testMDTitle = require('./testMDTitle');
// const testBlogPostMD = require('./testBlogPostMD');
// const testMarkedCustomRenderer = require('./testMarkedCustomRenderer');
// const testParseCustomImage = require('./testParseCustomImage');
// const getImageLabels = require('../getImageLabels');
// const getPostTitle = require('../getPostTitle');
// const getImageData = require('../getImageData');
// const generateId = require('../generateId');
// const parseFileName = require('../parseFileName');
// const testMkdir = require('./testMkdir');
// const processMdImageTag = require('../processMdImageTag');
// const convertMdToHtml2 = require('../convertMdToHtml2')
// const testFileConversion = require('../test/testFileConversion')
// const testAsync = require('../test/testAsync')
const testMongoDBAtlas = require('../test/testMongoDBAtlas')

main().catch(e => {console.log(e)});

async function main(){

    // testFileConversion();
    // testAsync()
    testMongoDBAtlas()
    

}