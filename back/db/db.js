//import environment variable
const dotenv = require("dotenv");
const result = dotenv.config();

const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@piiquantebackend.fggeq.mongodb.net/?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch(() => console.log("fail to connect MongoDB"));

module.exports = mongoose;
