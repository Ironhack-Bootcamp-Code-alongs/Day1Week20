require("dotenv/config");

const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const logger = require("morgan");

const app = express();
require("./config/db.config");

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  })
);

// Time to have fun implementing stuff, like routes and all that fun stuff

module.exports = app;
