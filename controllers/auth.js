const helpers = require(__dirname + '/../helpers/helpers.js');
const passport = require(__dirname + '/../config/passport.js');
const userModel = require(__dirname + '/../models/user.js');

const login = async function (ctx, next) {
    return passport.authenticate('local', function (err, user, info, status) {
        if (user) {
            ctx.body = helpers.httpResp(null, 0, 'login');
            return ctx.login(user);
        } else {
            ctx.body = helpers.httpResp(null, 1, 'wrong');
        }
    })(ctx, next)
};

const logout = async function (ctx, next) {
    ctx.logout();
    ctx.body = helpers.httpResp(null, 0, 'logout');
};

const check = async function (ctx, next) {
    if (ctx.isAuthenticated()) {
        ctx.body = helpers.httpResp(null, 0, 'auth pass');
    } else {
        //ctx.throw(401);
        ctx.body = helpers.httpResp(null, 0, 'not allowed');
    }
};

const set = async function (ctx, next) {
    userModel.setDefault();

};

const zero = async function (ctx, next) {
    ctx.logout();
};

module.exports = {
    login,
    logout,
    check,
    set,
    zero
};
