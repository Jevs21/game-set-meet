const { Pool } = require('pg');
require('dotenv').config();

const config = {
    development: {
        user: process.env.DEV_DB_USER,
        host: process.env.DEV_DB_HOST,
        database: process.env.DEV_DB_NAME,
        password: process.env.DEV_DB_PASSWORD,
        port: process.env.DEV_DB_PORT
    },
    test: {
        user: process.env.TEST_DB_USER,
        host: process.env.TEST_DB_HOST,
        database: process.env.TEST_DB_NAME,
        password: process.env.TEST_DB_PASSWORD,
        port: process.env.TEST_DB_PORT
    },
    production: {
        connectionString: process.env.DATABASE_URL, // Heroku or other platform db string
        ssl: {
            rejectUnauthorized: false
        }
    }
};

const env = process.env.NODE_ENV || 'development';
const pool = new Pool(config[env]);

module.exports = {
    query: (text, params) => pool.query(text, params),
};
