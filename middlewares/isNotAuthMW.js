module.exports = async (req, res, next) => {

    try{
        // const session = await req.session
        // console.log(session)

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