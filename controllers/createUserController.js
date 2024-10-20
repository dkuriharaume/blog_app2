const User = require('../models/User');

module.exports = async (req, res) => {
    // console.log(req.body);
    const newUser = await User.create({
        name: req.body.username,
        password: req.body.password
    });
    console.log(newUser);
    res.redirect('/');
}