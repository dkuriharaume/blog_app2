module.exports = ()=>{

    const test = '<img src="../../public/assets/img/D12345432.webp" alt="image" /> <img src="../../public/assets/img/someother.webp" alt="image" />';
    const re = /(?<=src=(['"]))(.*?)(?=\1)/g;
    const result = test.replace(re,"Hi: "+ "$2");
    console.log(result);

     
}