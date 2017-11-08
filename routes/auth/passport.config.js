const passport = require('koa-passport');
const LocalStrategy = require('passport-local');
//const UserModel = require(__dirname + '/models/UserModel');

passport.use(new LocalStrategy(
    function (username, password, donw) {
        let where = {where: {username: username}}

        return done(null, false, '禁止登陆');
        /*
        UserModel.findOne(where).then(function (result) {
            if (result != null) {
                if (result.password == password) {
                    return done(null, result)
                } else {
                    return done(null, false, '密码错误')
                }
            } else {
                return done(null, false, '未知用户')
            }
        }).catch(function (err) {
            log.error(err.message)
            return done(null, false, {message: err.message})
        })
        */

    }
));

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    return done(null, user);
});

module.exports = passport;

