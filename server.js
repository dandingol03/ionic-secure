var express = require('express');
var app = require('express')();
var static = require("express-static");
var bodyParser=require('body-parser');
var httpProxy = require("http-proxy");
var proxy = httpProxy.createProxyServer({});

var ulr = require('url');


var fs=require('fs');
var colors=require('colors');

app.enable('trust proxy');

app.post('*',function(req,res,next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.set('views', path.join(__dirname, 'views'));
app.use(static(__dirname + '/public'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());



app.post('/get_render_page.do',function(req,res) {
    res.send({re:'ok',arr:[{key:'b',company:0,date:100,detail:'ooo'},{key:'a',company:1,date:200,detail:'ooo'}]});
});

app.get('/get_render_page.do',function(req,res) {
    res.send({re:'ok',arr:[]});
});

app.listen(9030);
