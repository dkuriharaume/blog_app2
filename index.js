const express = require('express');
const app = express();
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const session = require('express-session');

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

// const path = require('path');

const homeController = require('./controllers/homeController');
const aboutController = require('./controllers/aboutController');
const contactController = require('./controllers/contactController');
const postController = require('./controllers/postController');
const createPostController = require('./controllers/createPostController');
const newPostController = require('./controllers/newPostController');
const newUserController = require('./controllers/newUserController');
const createUserController = require('./controllers/createUserController');
const loginController = require('./controllers/loginController');
const authenticateUserController = require('./controllers/authenticateUserController');

// console.log(app.locals);

let port = process.env.PORT;
if(port ==null||port=="") port = 4000;

app.listen(port);

app.get('/about', aboutController);
app.get('/contact', contactController);
app.get('/post', homeController);
app.get('/post/new', newPostController);
app.get('/user/new', newUserController);
app.get('/user/login', loginController);

main().catch(e =>{
    console.log(e);
});

async function main(){
    // connect to mongoDB here
    await mongoose.connect('mongodb://127.0.0.1:27017/blogTest2');

    app.get('/', homeController);
    app.post('/post/store', createPostController);
    app.get('/post/:id', postController);
    app.post('/user/store', createUserController);
    app.post('/auth/user', authenticateUserController);


    // console.log('started');

};