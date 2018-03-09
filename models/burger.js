var orm = require("../config/orm.js");

var burger = {
	selectAll: function(callback){
		orm.selectAll("burgers", function(res){
			callback(res);
		});
	},
	insertOne: function(columns, values, callback){
		orm.insertOne("burgers", columns, values, function(res){
			callback(res);
		});
	},
	updateOne: function(objectColumnValues, condition, callback){
		orm.updateOne("burgers", objectColumnValues, condition, function(res){
			callback(res);
		});
	}
};

module.exports = burger;