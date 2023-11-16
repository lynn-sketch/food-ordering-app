const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://varchodi:greenov@cluster0.elkzdh3.mongodb.net/food-ordering?retryWrites=true&w=majority", { useNewUrlParser: true })
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
