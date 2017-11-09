const Koa = require('koa');
const session = require('koa-session2');
const views = require('koa-views');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');

const passport = require(__dirname + '/config/passport.js');
const auth = require(__dirname + '/routes/auth/auth.js');


const app = new Koa();

const index = require('./routes/index');

// error handler
onerror(app);

// middlewares
app.proxy = true;
app.use(session({key: 'SESSIONID'}));

app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
}));

app.use(views(__dirname + '/views', {
    extension: 'pug'
}));

// logger
app.use(async (ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
});


app.use(json());
app.use(logger());
app.use(require('koa-static')(__dirname + '/public'));
app.use(require('koa-static')(__dirname + '/semantic/dist'));
app.use(passport.initialize());
app.use(passport.session());

// routes
auth.forEach(function(item, index) {
    app.use(item.routes(), item.allowedMethods());
});

// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
});

module.exports = app;
