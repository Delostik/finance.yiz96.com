const {UserTable} = require(__dirname + '/../config/db.js');

const getUserByName = async function (username) {
    return await UserTable.findOne({
        where: {
            username: username
        }
    });
};

module.exports = {getUserByName};

