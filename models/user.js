const {UserTable} = require(__dirname + '/../config/db.js');
const helpers = require(__dirname + '/../helpers/helpers.js')

const getUserByName = async function (username) {
    return await UserTable.findOne({
        where: {
            username: username
        }
    });
};

const setDefault = async function () {
    return await UserTable.create({
        username: 'yiz96',
        password: helpers.md5withSalt('123456')
    });
};

module.exports = {
    getUserByName,
    setDefault
};

