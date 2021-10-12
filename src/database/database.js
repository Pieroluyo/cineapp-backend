const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.PGUSER,
    process.env.PGPASSWORD,
    {
        host: process.env.PGHOST,
        dialect : 'postgres',
        //logging: false
        /*
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        }, 
        logging: false */
    }
);

module.exports = {
    sequelize
};