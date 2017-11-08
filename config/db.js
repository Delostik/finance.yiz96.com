const Sequelize = require('sequelize');

let sequelize = new Sequelize('finance', 'finance', 'finance', {
    host: 'localhost',
    dialect: 'mariadb',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});


let UserTable = sequelize.define('user', {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true
        },
        username: Sequelize.STRING(20),
        password: Sequelize.STRING(128)
    },
    {timestamps: false}
);

module.exports = {UserTable};