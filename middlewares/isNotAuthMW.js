module.exports = (req, res, next) => {

    try{
        if(req.session.user){
            req.flash('info', 'user already singed in');
            res.redirect('/');
            return next('route');
        }

        return next();
    }
    catch(e) {
        return next(e);

    }


};