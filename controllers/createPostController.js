const {resolve} = require('path');
const webp = require('webp-converter');
webp.grant_permission();
const {readFile, mkdir, writeFile} = require('fs/promises');
const processMdImageTag = require('../processMdImageTag');
const convertMdToHtml = require('../convertMdToHtml');

module.exports = async (req, res) =>{


    // Get files
    const keys = Object.keys(req.files);
    const doc = req.session.doc;

    // create directory of images
    const imgDir = resolve(__dirname, '../public/postData', doc._id.toString(), 'img');

    try {
        await mkdir(imgDir);
        console.log('image dir created: ' + imgDir)

    }
    catch(e){console.error(e)}

    // Convert to webp format and save images
    for(var i = 0; i < keys.length; i ++){

        const key = keys[i];

        // key corresponds to req.session.doc.postData.imageData[n].id
        const file = req.files[key];
        const destPath = resolve(imgDir, key + '.webp');
        const sourcePath = file.tempFilePath;

        try {
            if(file.mimetype == 'image/webp'){

                console.log(`${file.name} is already an webp format, so skip the conversion`);
                await file.mv(destPath);

            }
            else
                await webp.cwebp(sourcePath, destPath, '-q 80');

        }
        catch(e){
            console.error(e);
        }
    }
    // Read the markdown file

    try {

        const filepath =resolve(__dirname, '../public/postData', doc._id.toString(), doc.postData.filename) 
        const content = await readFile(filepath + '.md', {encoding: 'utf8'});

        // parse and save html file

        const mdContent = processMdImageTag(content, doc);
        const htmlContent = convertMdToHtml(mdContent);

        await writeFile(filepath + ".html", htmlContent, {encoding: 'utf8'})
        req.flash('info', 'file saved successfully');

    }
    catch(e){
        console.error(e);
        req.flash('info', 'something went wrong')
    }
    finally {

        res.redirect('/');

    }

}