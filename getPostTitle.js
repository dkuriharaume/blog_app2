module.exports = (source)=>{

    const re = /^<!--\s*title\s?:\s*(.*[^\s]+)\s*-->$/im;
    const result = re.exec(source);

    return result ? result[1]: null;

}