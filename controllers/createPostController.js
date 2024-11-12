const {resolve} = require('path');
// const parseFileName = require('../parseFileName');
const webp = require('webp-converter');
webp.grant_permission();
const {readFile, mkdir, writeFile} = require('fs/promises');
const processMdImageTag = require('../processMdImageTag');
const convertMdToHtml2 = require('../convertMdToHtml2');

module.exports = async (req, res) =>{

    // console.log(req.files);
    // console.log(req.session.postData);

    /**
     * Save images in a designated directory, storing the path for later use.
     * Identify the Markdown file from data saved in the session.
     * Read the MD file, parse it, and replace the previous matches with corresponding ![label](path).
     * Convert the MD file into an HTML and store the contents in a variable, saving the HTML file.
     * Pass the content to the local body variable and render the page.
     */

    const keys = Object.keys(req.files);
    const doc = req.session.doc;
    // const imageDir = 'assets/img/webp';

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
        // const mdFilePath = resolve(__dirname, '../public/postData', doc._id.toString(), doc.postData.filename + '.md');
        const content = await readFile(filepath + '.md', {encoding: 'utf8'});
        // console.log(content);

        // then, finally 
        /**
         * Parse the md content and replace the custom image comment with md img tags, referring to the document provided
         * And parse the final md to HTML
         * Then redirect to the home.
         * 
         * Fix post page after all is done
         */

        const mdContent = processMdImageTag(content, doc);
        const htmlContent = convertMdToHtml2(mdContent);

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