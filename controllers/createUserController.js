const User = require('../models/User');
const bcrypt = require('bcrypt');

module.exports = async (req, res) => {

    bcrypt.hash(req.body.password, 10, (error,hash)=>{

        if(error) console.log(error);

        req.flash('data', {
            username: req.body.username,
            password: req.body.password
        });

        User.create({
            name: req.body.username,
            password: hash
        })
        .then((user)=>{
            req.flash('info',`New user "${req.body.username}" is created!`);
            res.redirect('/');
        })
        .catch(error=>{
            // console.log(error)
            if(error.code && error.code == 11000) req.flash('error', 'An user with the username already exits.');
            else if(error.errors){
                if(!req.body.username) req.flash('error', 'username is required');
                if(!req.body.password) req.flash('error', 'password is required');
            }
            else req.flash('error', 'some unknown error has occured.');
            res.redirect('/user/new');

        });
    });

}