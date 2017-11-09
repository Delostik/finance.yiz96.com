const helpers = require(__dirname + '/../helpers/helpers.js');
const passport = require(__dirname + '/../config/passport.js');
const userModel = require(__dirname + '/../models/user.js');

const login = async function (ctx, next) {
    if (ctx.isAuthenticated()) {
        ctx.redirect('/');
        return;
    }
    await ctx.render('login')
};


const index = async function(ctx, next) {
    if (!ctx.isAuthenticated()) {
        ctx.redirect('/login');
        return;
    }
    await ctx.render('index', {
        title: 'welcome'
    })
};

module.exports = {
    index,
    login
};


