require('log-timestamp');
var express = require("express");
var bodyParser = require("body-parser");
var faker = require("faker");
var app = express();

var movement = false;

var port = process.argv[2] || 80;

app.use(bodyParser.json());

app.get("/status", function (req, res) {
	console.log(`RECEIVED GET REQUEST: ${JSON.stringify(req.body)}`);
	res.send({ movement });
});

app.put("/status", (req, res) => {
	console.log(`RECEIVED PUT REQUEST: ${JSON.stringify(req.body)}`);
	movement = req.body.movement;
	res.send({ movement });
});

app.listen(port, function () {
	console.log(`rest-motion-sensor listening on port ${port}!`);
});
