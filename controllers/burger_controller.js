var db = require('../models');
var express = require('express');
var route = express.Router();

route. get('/', function(req, res){
    res.resend('welcome!');
});

route.get('/burgers', function(req, res){
    var query = {};
    if(req.query.CustomerId){

    }
})