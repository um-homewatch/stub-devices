require('log-timestamp');
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var port = process.argv[2] || 80;
var weather = {
	temperature: 25,
	windspeed: 10,
	raining: false,
	cloudy: false
};

app.use(bodyParser.json());

app.get("/status", function (req, res) {
	console.log(`RECEIVED GET REQUEST: ${JSON.stringify(req.body)}`);
	res.send(weather);
});

app.put("/status", (req,res) => { 
	console.log(`RECEIVED PUT REQUEST: ${JSON.stringify(req.body)}`);
	Object.assign(weather, req.body);
	res.send(weather);
});

app.listen(port, function () {
	console.log(`rest-weather listening on port ${port}!`);
});