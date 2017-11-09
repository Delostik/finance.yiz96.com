const Sequelize = require('sequelize');

let sequelize = new Sequelize('finance', 'finance', 'finance', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});


let UserTable = sequelize.define('users', {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true
        },
        username: Sequelize.STRING(10),
        password: Sequelize.STRING(64)
    },
    {timestamps: false}
);



module.exports = {UserTable};