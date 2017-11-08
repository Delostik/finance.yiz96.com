const helpers = require(__dirname + '/../helpers.js');

const logout = function (ctx, next) {
    ctx.logout();
    ctx.body = helpers.httpResp(null, 0, 'logout');
};

const check = function (ctx, next) {
    if (ctx.isAuthenticated()) {
        ctx.body = helpers.httpResp(null, 0, 'auth pass');
    } else {
        //ctx.throw(401);
        ctx.body = helpers.httpResp(null, 0, 'not allowed');
    }
};

const set = function (ctx, next) {
    ctx.login("zy");
};

const zero = function (ctx, next) {
    ctx.logout();
};

module.exports = {
    logout,
    check,
    set,
    zero
};
