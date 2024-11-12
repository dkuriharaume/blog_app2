const {mkdir} = require('fs/promises');
const {resolve} = require('path');

module.exports = async ()=>{

    try{

        const testDir = 'testDir';
        const path = resolve(__dirname, testDir);

        await mkdir(path);
        // console.log(path);


    }
    catch(e){console.error(e);};

}