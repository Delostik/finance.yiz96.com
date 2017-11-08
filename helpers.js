const crypto = require('crypto');

const salt = process.env['YIZ96_SALT']

const httpResp = function (data = null, errno = 0, errmsg = '') {
    return {
        errno: errno,
        errmsg: errmsg,
        data: data
    }
};

const md5withSalt = function(raw) {

};



module.exports = {
    httpResp
};


