module.exports = {
    ensureAuthenticated: function(req, res, next) {
        if(req.isAuthenticated()) {
            return next();
        }else {
            req.flash('error_msg', 'Please log in to view this resource.');
            res.redirect('/user/login');
        }
    },
    ensureAuthorized: function(user, authorization, req, res, next) {
        if(user == authorization) {
            return next();
        }else {
            req.flash('error_msg', 'You are not allowed to see this resource!');
            res.redirect('/dashboard');
        }
    }
}