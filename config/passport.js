const passport = require('koa-passport');
const LocalStrategy = require('passport-local');
const usermodel = require(__dirname + '/../models/user.js');
const helpers = require(__dirname + '/../helpers/helpers.js');

passport.use(new LocalStrategy(
    function (username, password, done) {
        return usermodel.getUserByName(username).then(function (userInfo) {
            if (userInfo) {
                correctPassword = userInfo.get('password')
                if (correctPassword == helpers.md5withSalt(password)) {

                    console.log('okokok')
                    return done(null, userInfo);
                } else {
                    console.log('mimacuowu')
                    return done(null, false, '密码错误')
                }
            } else {
                console.log('not exist')
                return done(null, false, '用户不存在');
            }
        })


        //return done(null, false, '禁止登陆');
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