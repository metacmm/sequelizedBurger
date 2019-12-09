var express = require("express");
var db = require("../models");
var router = express.Router();
var Sequelize = require("sequelize");

router.get("/", function(req, res){

    db.Burger.findAll({
        include:[db.Customer],
    }).then(function(data1){
        db.Burger.findAll({
            where:{
                quantity:{
                    [Sequelize.Op.gt]: 0
                } 
            }
        }).then(function(data2){
            var hbsObject = {
                burgers:data1,
                customers: data1.Customers,
                availableBurgers: data2
            };
            res.render("index", hbsObject);
        });
    });
});

router.put("/api/burgers/:id", function(req, res){
    db.Burger.update(
        {
            name: req.body.name,
            devoured: req.body.devoured
        },{
        where:{
            id: req.params.id
        }
    }).then(function(data){
        var hbsObject = {
            burgers: data
        }
        res.render("index",hbsObject);
    });
});

router.post("/api/burgers", function(req, res){
    console.log(req.body);
    db.Burger.create(
        {
            name: req.body.name,
            quantity: req.body.quantity
        }
    ).then(function(data){
        var hbsObject = {
            burgers: data
        }
        res.json({id: data.id});
    })
});

router.post("/api/customers", function(req, res){
    db.Customer.create(
        {
            name: req.body.name,
            BurgerId: req.body.BurgerId
        }
    ).then(function(data){
        res.json({id: data.id});
    })
})
module.exports = router;