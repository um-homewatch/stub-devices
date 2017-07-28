exports.writeJSON = (res, json) => {
    res.setOption("Content-Format", "application/json");
    res.write(JSON.stringify(json));
}
