const crypto = require('crypto');

const salt = process.env['YIZ96_SALT'];

const httpResp = function (data = null, errno = 0, errmsg = '') {
    return {
        errno: errno,
        errmsg: errmsg,
        data: data
    }
};

const md5withSalt = function (str) {
    md5sum = crypto.createHash('md5');
    md5sum.update(str + salt);
    return md5sum.digest('hex');
};


module.exports = {
    httpResp,
    md5withSalt
};


