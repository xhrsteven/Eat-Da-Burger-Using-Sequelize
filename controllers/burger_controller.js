var db = require('../models');
var express = require('express');
var route = express.Router();

route.get('/', function(req, res){
    res.redirect('/burgers');
});

route.get('/burgers', function(req, res){
    var query = {};
    if(req.query.CustomerId){
        query.Customer = req.query.CustomerId
    }
    db.Burger.findAll({
        include: db.Customer,
        where: query
    })
    .then(function(data){
        var hbsObject = {burgers: data};
        res.render('index', hbsObject);
    })
});

//Submit button is pressed
route.post('/burgers/create', function(req, res){
    db.Burger.create({
        burger_name: req.body.burger_name 
    })
    .then(function(){
        res.redirect('/burgers');
    })
});

//devour button is pressed
route.put('/burgers/update', function(req, res){
    var customerName = req.body.eatenBy;
    db.Customer.findAll({
        where:{cuustomer_name: customerName}
    })
    .then(function(data){
        if(data.length > 0){
            devour(data[0].dataValues.id);
        }else{
            console.log('create new customer');
            db.Customer.create({
                cuustomer_name: req.body.eatenBy
            })
            .then(function(data){
                devour(data.dataValues.id);
            })
        }
    })

})



function devour(customer){
    db.Burger.update({
        devour: true,
        CustomerId: customer
    },
    { where: {id: req.body.burger_id}}
    )
    .then(function(){
        res.redirect('/burgers');
    })
}

module.exports = route;