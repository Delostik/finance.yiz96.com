const Router = require('koa-router');
const router = new Router();
const passport = require(__dirname + '/passport.config.js');

const auth = require(__dirname + '/../../controllers/auth.js');

router.get('/auth/login', function (ctx, next) {
    return passport.authenticate('local', function (err, user, info, status) {
        if (user) {
            ctx.body = helpers.httpResp(null, 0, 'login');
            return ctx.login(user);
        } else {
            ctx.body = helpers.httpResp(null, 1, 'wrong');
        }
    })(ctx, next)
});

router.get('/auth/logout', auth.logout);
router.get('/auth/check', auth.check);
router.get('/auth/set', auth.set);
router.get('/auth/zero', auth.zero);

const a = require(__dirname + '/../index.js');

module.exports = [a, router];