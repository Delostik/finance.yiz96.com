const router = require('koa-router')();
const page = require(__dirname + '/../controllers/page.js');

router.get('/', page.index);
router.get('/login', page.login);

module.exports = router;
