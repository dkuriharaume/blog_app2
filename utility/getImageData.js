const generateId = require('./generateId');

module.exports = (source)=>{

    const re = /^<!--\s?image\s*:\s*(.*[^\s]+)\s*-->$/mg;

    const matched = source.match(re)
    const matchCount = matched?.length;

    let data= [];

    if(matched)
    for(var i = 0; i < matchCount; i++){
        const result = re.exec(source);
        data.push(
            {
                match: result[0],
                label: result[1],
                id: generateId(10)
            }
        );
    }


    return data.length > 0 ? data : null;

}