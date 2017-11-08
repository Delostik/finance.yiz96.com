const router = require('koa-router')();

router.get('/', async (ctx, next) => {
    if (!ctx.session.user)
        ctx.redirect('/login');

    await ctx.render('index', {
        title: 'Hello Koa 2!'
    })
});

router.get('/login', async (ctx, next) => {
    if (ctx.session.user)
        ctx.redirect('/');

    await ctx.render('login', {
        title: 'need login'
    })
});


module.exports = router;
