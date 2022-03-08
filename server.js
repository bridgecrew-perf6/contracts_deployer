const express = require('express');
const res = require('express/lib/response');
const path = require("path");

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "src", "static")));


app.use(function (req, res, next) {
    console.log("Time: %d", Date.now());
    next();
});

app.get("/", function(req, res) {
    res.sendFile(path.resolve("src", "index.html"));
});

app.listen(process.env.PORT || 5001, () => console.log("Server running..."));