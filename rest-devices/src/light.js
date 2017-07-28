require('log-timestamp');
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var power = false;

var port = process.argv[2] || 80;

app.use(bodyParser.json());

app.get("/status", function (req, res) {
	console.log(`RECEIVED GET REQUEST: ${JSON.stringify(req.body)}`);
	res.send({ power: power });
});

app.put("/status", (req, res) => {
	console.log(`RECEIVED PUT REQUEST: ${JSON.stringify(req.body)}`);
	power = req.body.power;
	res.send({ power: power });
});

app.listen(port, function () {
	console.log(`rest-light listening on port ${port}!`);
});