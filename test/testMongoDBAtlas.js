const mongoose = require('mongoose')
const BlogPost = require('../models/BlogPost')
const User = require('../models/User')

module.exports = async ()=>{
    
    try{
        // mongoose.connection.on('connected',()=>console.log('connected'))
        const connectionString = "mongodb+srv://dkurihara3352:blDSuhT5AJnlv28D@dkuriharatest.b1ghg.mongodb.net/?retryWrites=true&w=majority&appName=dkuriharaTest"

        // await mongoose.connect('mongodb://127.0.0.1:27017/blogTest2');
        await mongoose.connect(connectionString, {dbName:"blogTest2"})

        // const result = await BlogPost.find({})
        // console.log(BlogPost.collection)
        const result = await User.find({})
        console.log(result)
        

    }
    catch(e){
        console.error(e)
    }

}