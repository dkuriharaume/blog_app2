const User = require('../models/User');
const bcrypt = require('bcrypt');

module.exports = async (req, res) =>{

    const users = await User.find({
        name: req.body.username
    });

    if(users == null || users.length < 1){
        console.log('user with the name not found');
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
                console.log('password is not correct.');
                return res.redirect('/user/login');
            }
        }
    }

};