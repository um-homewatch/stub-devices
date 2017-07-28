require('log-timestamp');
const coap = require("coap");
const Router = require("coap-router");
const app = Router();
const server = coap.createServer(app);
const utils = require("./utils.js");

let POWER = false;

var port = process.argv[2] || 5683;

server.listen(port, () => {
  console.log(`coap-light listening on port ${port}!`);
});

app.get("/status", function (req, res) {
  let requestBody = req.payload.toString();

  console.log(`RECEIVED GET REQUEST: ${JSON.stringify(requestBody)}`);
  utils.writeJSON(res, { power: POWER })
  res.end();
});

app.put("/status", (req, res) => {
  let requestBody = req.payload.toString();

  console.log(`RECEIVED PUT REQUEST: ${JSON.stringify(requestBody)}`);
  let jsonPayload = JSON.parse(requestBody);
  if ("power" in jsonPayload) POWER = jsonPayload.power;

  utils.writeJSON(res, { power: POWER })
  res.end();
});
