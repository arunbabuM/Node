const express = require('express');

const path = require('path');
const arun = express();

const router = require('../Node/first/router/firstRouter');

//arun.use(express.static("/public"));
//arun.use(express.static(__dirname + '/public'));
arun.use(express.static(path.join(__dirname, '/public')));
arun.set('views', './views');
arun.set('view engine', 'ejs');
arun.use(express.json({
    limit: '50mb'
}));
arun.use(
    express.urlencoded({
        extended: false,
    })
);

arun.use('/', router );


arun.listen(3000, function(){
    console.log("Server has started Succesflly")
})