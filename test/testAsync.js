module.exports = ()=>{

    testConcurrent()
    // testConcurrentAsync()
    // testSequentialPromises()

}

async function testConcurrent(){

    const result = await Promise.all([alarm('Daisuke', 1000), alarm('Tanaka', 2000), alarm('KG', 3000)])
    // const promises = [()=>alarm('daisuke', 1000), ()=>alarm('tanaka', 2000), ()=>alarm('KG', 3000)]

    // const result = await Promise.all(promises)

    console.log(`all done \n${result}`)
}

async function testConcurrentAsync(){

    // this test revealed to be sequential

    let result = [];
    let timer = 0;
    for(var i = 0; i < 3; i++){
        timer += 1000;
        result.push(await alarm('Daiuke', timer))
    }
    console.log(result)
}

async function testSequentialPromises(){

    /**
     * This test is not successful, ditch it
     */

    // const name = 'Daisuke'
    // const promises = [alarm(name, 1000), alarm(name, 2000), alarm(name, 3000)]
    const promises = [()=>{return alarm('Daisuke', 1000)}, ()=>{return alarm('Tanaka', 2000)}, ()=> alarm('KG', 3000)]
    // const promises = [alarm("Daisuke", 1000), alarm("Tanaka", 2000), alarm("KG", 3000)]

    // promises.reduce((accumulator, currentValue)=>{
    //     return accumulator.then((result)=>{
    //         console.log(result);
    //         return currentValue
    //     })
    // }, Promise.resolve())
    promises.reduce((accumulator, currentValue)=>{
        return accumulator.then(currentValue)
    }).then(result =>{console.log(`all done: ${result}`)})
}

function anotherAlarm(){
    return alarm('Daisuke', 2000);

}


function alarm(person, delay){
    console.log(`function alarm with ${person}, ${delay} is called`)
    return new Promise((resolve, reject)=>{
        if(delay < 0) throw new Error("Alarm delay must be greater than 0");
        setTimeout(()=>{
            const result = `${person}, you've slept for ${delay}, wake up!`
            console.log(result)
            resolve(result)
        }, delay)
    })
}