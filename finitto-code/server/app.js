require("dotenv/config");

const express = require("express");
require("./db");

const app = express();

// personally this i just find cleaner to start most of the middlewares
require("./setup")(app);

// once again, cleaning the app.js file and just have a logic for the routes all in one folder
app.use("/api", require("./routes"));

module.exports = app;
