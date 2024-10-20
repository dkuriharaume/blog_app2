const User = require('../models/User');
const bcrypt = require('bcrypt');

module.exports = async (req, res) => {

    bcrypt.hash(req.body.password, 10, (error,hash)=>{

        if(error) console.log(error);

        User.create({
            name: req.body.username,
            password: hash
        });

    });

    res.redirect('/');
}