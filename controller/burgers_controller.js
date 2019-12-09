var express = require("express");
var db = require("../models");
var router = express.Router();
var Sequelize = require("sequelize");

router.get("/", function (req, res) {

    db.Burger.findAll({
        include: [db.Customer],
    }).then(function (data) {
        console.log(data);
        var hbsObject = {
            burgers: [],
            availableBurgers: [],
        };

        for(var i = 0; i < data.length; i++){
            var arrServedCustomer = [];
            var newBurger = {
                id: data[i].id,
                name: data[i].name,
                customers:[],
                arrServedCustomer:[]
            };
            if (data[i].quantity > 0){
                hbsObject.availableBurgers.push(
                    {
                        id:data[i].id,
                        name:data[i].name,
                    });
            }
            console.log(data[i].Customers);

            for (var j = 0; j < data[i].Customers.length; j++){
                if (data[i].Customers[j].served){
                    newBurger.arrServedCustomer.push(data[i].Customers[j].name);
                } else {
                    newBurger.customers.push({
                        customerId: data[i].Customers[j].id,
                        customerName: data[i].Customers[j].name
                    });
                }
            }
        

            hbsObject.burgers.push(newBurger);
        }
        res.render("index", hbsObject);
    });
});

router.put("/api/burgers/:id", function (req, res) {
    db.Burger.update(
        {
            name: req.body.name,
            devoured: req.body.devoured
        }, {
            where: {
                id: req.params.id
            }
        }).then(function (data) {
            var hbsObject = {
                burgers: data
            }
            res.render("index", hbsObject);
        });
});

router.post("/api/burgers", function (req, res) {
    console.log(req.body);
    db.Burger.create(
        {
            name: req.body.name,
            quantity: req.body.quantity
        }
    ).then(function (data) {
        var hbsObject = {
            burgers: data
        }
        res.json({ id: data.id });
    })
});

router.post("/api/customers", function (req, res) {
    db.Customer.create(
        {
            name: req.body.name,
            BurgerId: req.body.BurgerId
        }
    ).then(function (data) {
        res.json({ id: data.id });
    })
})
module.exports = router;