module.exports = (filename)=>{

    const re = /^(?<name>.*)(?<extension>\..*)$/i;
    const result = re.exec(filename);

    return {
        name: result.groups?.name,
        extension: result.groups?.extension
    };

}