module.exports = (source)=>{

    const re = /^<!--\s?image\s*:\s*(.*[^\s]+)\s*-->$/mg;

    const matched = source.match(re)
    const matchCount = matched?.length;

    let result = [];

    if(matched)
    for(var i = 0; i < matchCount; i++){
        result.push(re.exec(source)[1]);
    }


    return result.length > 0 ? result: null;

}