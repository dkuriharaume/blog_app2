const User = require('../models/User');
const bcrypt = require('bcrypt');

module.exports = async (req, res) =>{

    req.flash('data', {
        username: req.body.username,
        password: req.body.password
    });
    let isBlank = false;
    if(!req.body.username){
        isBlank = true;
        req.flash('error', 'username is required.');
    }
    if(!req.body.password){
        isBlank = true;
        req.flash('error', 'password is required.');
    }
    if(isBlank) return res.redirect('/user/login');

    const users = await User.find({
        name: req.body.username
    });

    if(users == null || users.length < 1){
        // console.log('user with the name not found');
        req.flash('error', 'An user with the username is not found.');
        res.redirect('/user/login');
    } else {
        for(var i = 0; i < users.length; i ++){
            const user = users[i];
            const matched = await bcrypt.compare(req.body.password, user.password);
            if(matched){

                req.session.regenerate((error)=>{
                    if(error) return next(error);
                    req.session.user = user;

                    console.log(req.session.user);

                    req.session.save((error)=>{
                        if(error) return next(error);
                        req.flash('info', `Logged in as "${user.name}" !`)
                        res.redirect('/');

                    });
                });
            }else{
                req.flash('error', 'password is not correct.');
                return res.redirect('/user/login');
            }
        }
    }

};