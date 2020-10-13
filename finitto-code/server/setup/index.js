const cookieParser = require("cookie-parser");
const express = require("express");
const cors = require("cors");
const logger = require("morgan");

module.exports = (app) => {
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
};
