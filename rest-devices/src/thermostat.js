require('log-timestamp');
var express = require("express");
var bodyParser = require("body-parser");
var app = express(); 

var target_temperature = 25;

var port = process.argv[2] || 80;

app.use(bodyParser.json());

app.get("/status", function (req, res) {
	console.log(`RECEIVED GET REQUEST: ${JSON.stringify(req.body)}`);
	res.send({target_temperature: target_temperature});
});

app.put("/status", (req,res) => { 
	console.log(`RECEIVED PUT REQUEST: ${JSON.stringify(req.body)}`);
	target_temperature = req.body.target_temperature;
	res.send({target_temperature: target_temperature});
});

app.listen(port, function () {
	console.log(`rest-thermostat listening on port ${port}!`);
});