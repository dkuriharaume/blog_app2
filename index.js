const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');
const session = require('express-session');
const mongoose = require('mongoose');
const mongodb = require('mongodb')
const MongoStore = require('connect-mongo')

const flash = require('connect-flash');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
// app.use(express.json()); 
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));
// const connectionString = "mongodb+srv://dkurihara3352:blDSuhT5AJnlv28D@dkuriharatest.b1ghg.mongodb.net/?retryWrites=true&w=majority&appName=dkuriharaTest"
// app.use(session({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: false,
//     store: MongoStore.create({
//         mongoUrl: connectionString,
//         dbName:"blogTest2"
//     })
// }));
// app.use(flash());

const homeController = require('./controllers/homeController');

const aboutController = require('./controllers/aboutController');
const contactController = require('./controllers/contactController');
const postController = require('./controllers/postController');
const createPostController = require('./controllers/createPostController');
const newPostController = require('./controllers/newPostController');
const newUserController = require('./controllers/newUserController');
const loginController = require('./controllers/loginController');
const authenticateUserController = require('./controllers/authenticateUserController');
const logoutController = require('./controllers/logoutController');
const notfoundController = require('./controllers/pageNotFoundController');
const extractImageLabelsController = require('./controllers/extractImageLabelsController');
const uploadImagesController = require('./controllers/uploadImagesController');

const isAuthenticatedMW = require('./middlewares/isAuthenticatedMW');
const isNotAuthMW = require('./middlewares/isNotAuthMW');
const createUserMW = require('./middlewares/createUserMW');

let port = process.env.PORT;
if(port ==null||port=="") port = 4000;

app.listen(port);



main().catch(e =>{
    console.log(e);
});

async function main(){

    const connectionString = "mongodb+srv://dkurihara3352:blDSuhT5AJnlv28D@dkuriharatest.b1ghg.mongodb.net/?retryWrites=true&w=majority&appName=dkuriharaTest"

    try{

        await mongoose.connect(connectionString, {dbName:"blogTest2"})
        const connection = mongoose.connection;
        const client = connection.getClient()

        app.use(session({
            secret: 'keyboard cat',
            resave: false,
            saveUninitialized: false,
            store: MongoStore.create({client})
            })
        )
    }
    catch(e){console.error(e)}

    app.use(flash());

    app.get('/', homeController);
    app.get('/about', aboutController);
    app.get('/contact', contactController);
    app.get('/post', homeController);
    app.get('/user/login', isNotAuthMW, loginController);
    app.get('/user/logout', isAuthenticatedMW, logoutController);
    app.get('/user/new', newUserController);
    app.get('/post/new', isAuthenticatedMW ,newPostController);
    app.get('/post/uploadImages', uploadImagesController);
    app.post('/post/store',isAuthenticatedMW, createPostController);
    app.post('/post/select_images', extractImageLabelsController);
    app.get('/post/:id', postController);
    app.post('/user/store', createUserMW, authenticateUserController);
    app.post('/auth/user', isNotAuthMW, authenticateUserController);
    app.get('/*', notfoundController);
};