module.exports = (req, res, next) =>{

    try {
        if(!req.session.user){

            res.redirect('/user/login');

        }else {
            next();
        }
    }
    catch (e) {
        next(e);
    }


};