var connection = require("../config/connection.js");


var orm = {

	selectAll: function(tableInput, callback){
		var queryString = "SELECT * FROM " + tableInput + ";";
		connection.query(queryString, function(error, results){
			if(error){
				throw err;
			}
			callback(results);
		});
	},
	insertOne: function(tableInput, columns, values, callback){
		var queryString = "INSERT INTO " + tableInput;
		queryString += "(";
		queryString += columns.toString();
		queryString += ")";
		queryString += "VALUES(?)";

		console.log(queryString);

		connection.query(queryString, values, function(error, results){
			if(error){
				throw error;
			}
			callback(results);
		});

	},
	updateOne: function(tableInput, objectColumnValues, condition, callback){
		var queryString = "UPDATE " + tableInput;
		queryString += "SET ";
		queryString += "devoured = true";
		queryString += "WHERE";
		queryString += condition;

		console.log(queryString);

		connection.query(queryString, function(error, results){
			if(error){
				throw error;
			}
			callback(results);
		});
	}
};

module.exports = orm;


