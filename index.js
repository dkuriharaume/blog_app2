const express = require('express');
const app = express();
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const session = require('express-session');
const flash = require('connect-flash');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
// app.use(express.json()); 
app.use(fileUpload());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(flash());

// const path = require('path');

// const homeController = require('./controllers/homeController');
const homeMDController = require('./controllers/homeMDController');
const aboutController = require('./controllers/aboutController');
const contactController = require('./controllers/contactController');
// const postController = require('./controllers/postController');
const postMDController = require('./controllers/postMDController');
// const createPostController = require('./controllers/createPostController');
const createPostMDController = require('./controllers/createPostMDController');
// const newPostController = require('./controllers/newPostController');
const newUserController = require('./controllers/newUserController');
const newPostMDController = require('./controllers/newPostMDController');
// const createUserController = require('./controllers/createUserController');
const loginController = require('./controllers/loginController');
const authenticateUserController = require('./controllers/authenticateUserController');
const logoutController = require('./controllers/logoutController');
const notfoundController = require('./controllers/pageNotFoundController');
const testPostController = require('./controllers/testPostController');

const isAuthenticatedMW = require('./middlewares/isAuthenticatedMW');
const isNotAuthMW = require('./middlewares/isNotAuthMW');
const createUserMW = require('./middlewares/createUserMW');
// console.log(app.locals);

let port = process.env.PORT;
if(port ==null||port=="") port = 4000;

app.listen(port);

app.get('/about', aboutController);
app.get('/contact', contactController);
app.get('/post', homeMDController);
app.get('/post/new', isAuthenticatedMW ,newPostMDController);
// app.get('/post/new/md', isAuthenticatedMW, newPostMDController);
app.get('/user/new', newUserController);
app.get('/user/login', isNotAuthMW, loginController);
app.get('/user/logout', isAuthenticatedMW, logoutController);

app.get('/post/test', testPostController);

main().catch(e =>{
    console.log(e);
});

async function main(){
    // connect to mongoDB here
    await mongoose.connect('mongodb://127.0.0.1:27017/blogTest2');

    // app.get('/', homeController);
    app.get('/', homeMDController);
    app.post('/post/store',isAuthenticatedMW, createPostMDController);
    // app.post('/post/store/md', isAuthenticatedMW, createPostMDController);
    // app.get('/post/:id', postController);
    app.get('/post/:id', postMDController);
    // app.post('/user/store', createUserController);
    app.post('/user/store', createUserMW, authenticateUserController);
    app.post('/auth/user', isNotAuthMW, authenticateUserController);
    // console.log('started');
    app.get('/*', notfoundController);
};