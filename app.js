const express = require('express');
const path = require('path');
const env = require('dotenv');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const corsFilter = require('./src/middleware/cors-filter.js');

const usersRouter = require('./src/routes/users');

const app = express();

env.config();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(corsFilter);

app.use('/users', usersRouter);

app.listen(3000);

module.exports = app;
