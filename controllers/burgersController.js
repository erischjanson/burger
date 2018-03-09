var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");


router.get("/", function(req, res){
	burger.all(function(data){
		var hbsOject = {
			burger: data
		};
		console.log(hbsOject);
		res.render("filename", hbsObject);
	});
});


router.post("/api/burgers", function(req, res){
	burger.insertOne("burger_name", req.body.name, function(result){
		res.json({id: result.insertId});
	});
});

router.put(){

};

module.exports = router;