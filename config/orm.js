var connection = require("./connection");

function printQuestionMarks(num){
    var arr = [];
    for (var i = 0; i < num; i++){
        arr.push("?");
    }

    return arr.toString();
}

function objToSql(ob){
    var arr = [];

    for (var key in ob){
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)){
            if (typeof value === "string" && value.indexOf(" ") >= 0){
                value = "'" + value + "'";
            }
        }
        arr.push(key + "=" + value);
    }

    return arr.toString();
}

var orm = {
    selectAll: function(table, cbfunc){
        var sql = "SELECT * FROM " + table + ";";
        console.log(sql);
        console.log("orm.js");
        connection.query(sql, function(err, data){
            if(err) throw err;
            cbfunc(data);
        });
    },
    insertOne: function(table, cols, vals, cbfunc){
        var sql = "INSERT INTO " + table;
        sql += "(";
        sql += cols.toString();
        sql += ")";
        sql += "VALUES ("
        sql += printQuestionMarks(vals.length);
        sql += ")";
        console.log(sql);

        connection.query(sql, vals, function(err, data){
            if (err) throw err;
            cbfunc(data);
        })
    },
    updateOne: function(table, objColVal, condition, cbfunc){
        var sql = "UPDATE " + table;
        sql += " SET ";
        sql += objToSql(objColVal);
        sql += " WHERE ";
        sql += condition;

        console.log(sql);
        connection.query(sql, function(err, data){
            if (err) throw err;
            cbfunc(data);
        });
    }
}

module.exports = orm;