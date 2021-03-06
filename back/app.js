// Importation :
const express = require("express");
const path = require("path");

// import morgan for logging http
const morgan = require("morgan");

const sauceRoutes = require("./routes/sauce");
const userRoutes = require("./routes/user");

const app = express();

// import data base mongoDB
const mongoose = require("./db/db");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(express.json());
app.use(morgan("dev"));
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api/sauces", sauceRoutes);
app.use("/api/auth", userRoutes);

module.exports = app;
