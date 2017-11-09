const Router = require('koa-router');
const router = new Router();


const auth = require(__dirname + '/../../controllers/auth.js');

router.post('/auth/login', auth.login);

router.get('/auth/logout', auth.logout);
router.get('/auth/check', auth.check);
router.get('/auth/set', auth.set);
router.get('/auth/zero', auth.zero);

const a = require(__dirname + '/../index.js');

module.exports = [a, router];