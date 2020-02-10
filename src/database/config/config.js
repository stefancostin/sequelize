require('dotenv').config();

module.exports = {
  development: {
    url: process.env.DATABASE_URL,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: '127.0.0.1',
    dialect: 'postgres',
    quoteIdentifiers: false // set case-insensitive
  }
}