const express = require('express');
const arun = express();

const router = require('../Node/first/router/firstRouter');

arun.set('views', './views');
arun.set('view engine', 'ejs');

arun.use('/', router );


arun.listen(3000, function(){
    console.log("Server has started")
})