var orm = require("../config/orm");

var burger = {
    all: function(cbfunc){
        orm.selectAll("burgers", function(result){
            console.log("burger.js");
            cbfunc(result);
        });
    },
    update: function(objColVals, condition, cbfunc){
        orm.updateOne("burgers",objColVals, condition, function(result){
            cbfunc(result);
        });
    },
    create: function(cols, vals, cbfunc){
        orm.insertOne("burgers", cols, vals, function(result){
            cbfunc(result);
        });
    }
}

module.exports = burger;