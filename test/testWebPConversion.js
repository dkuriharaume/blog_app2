const webp = require('webp-converter');
webp.grant_permission();

module.exports = ()=>{

    const imagePath = 'public/assets/img/';
    const imageId = 'DSC02688';
    const input = imagePath + imageId + '.jpg';
    const output = imagePath + 'test' + '.webp';

    webp.cwebp(input, output, '-q 80', logging="-v");

}