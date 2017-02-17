
var assert = require('assert');
var express = require('express');
var path = require('path');
var config = require('./config');
var http = require('http');


var app = new express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function(req,res){
  res.render('index', { title: 'Returns all'});
});

console.log(config);

app.listen(config.listen);;
