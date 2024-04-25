var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');

const mongoose = require('mongoose');
var app = express();

mongoose.connect('mongodb://127.0.0.1:27017/perfume')
    .then(res => console.log("連線資料成功"));
app.use(cors())  //跨域
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/products', productsRouter); 


module.exports = app;
