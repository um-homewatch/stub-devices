require('log-timestamp');
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var locked = true;

var port = process.argv[2] || 80;
 
app.use(bodyParser.json());

app.get("/status", function (req, res) {
	console.log(`RECEIVED GET REQUEST: ${JSON.stringify(req.body)}`);
	res.send({locked: locked});
});

app.put("/status", (req,res) => {
	console.log(`RECEIVED PUT REQUEST: ${JSON.stringify(req.body)}`);
	locked = req.body.locked;
	res.send({locked: locked});
});

app.listen(port, function () {
	console.log(`rest-lock listening on port ${port}!`);
});