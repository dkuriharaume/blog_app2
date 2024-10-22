
module.exports = async (req, res) =>{

    const username = req.session.user.name;

    req.session.user = null;

    req.session.save((error)=>{

        if(error) next(error);

        req.session.regenerate((error)=>{

            if(error) next(error);
            req.flash('info', `"${username}" is logged out!`);
            res.redirect('/');

        })

    });
};