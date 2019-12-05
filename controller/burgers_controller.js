var express = require("express");
var burger = require("../models/burger");
var router = express.Router();

router.get("/", function(req, res){
    burger.all(function(data){
        console.log("controller.js");
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.put("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;

    console.log("condition" + condition);

    burger.update({devoured: req.body.devoured}, condition, function(result){
        if (result.changedRows == 0){
            res.status(404).end();
        }
        res.status(200).end();
    });
    
});

router.post("/api/burgers", function(req, res){
    console.log(req.body);
    burger.create(["burger_name"], [req.body.name], function(result){
        res.json({id: result.insertedId});
    });
});

module.exports = router;