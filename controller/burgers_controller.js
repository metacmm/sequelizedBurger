var express = require("express");
var db = require("../models");
var router = express.Router();

router.get("/", function(req, res){

    db.Burger.findAll({
        include:[db.Customer],
    }).then(function(data){
        
        var hbsObject = {
            burgers: data
        }
        res.render("index", hbsObject);
    })
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

module.exports = router;