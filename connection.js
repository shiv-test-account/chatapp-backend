const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", true); // due to new version changes

console.log("env variable access:", process.env.DB_USERNAME);

mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.z7bm1qr.mongodb.net/chatapp?retryWrites=true&w=majority`,
  (err) => {
    if (err) {
      console.log("Database connection error:", err);
    } else {
      console.log("Connected to database...");
    }
  }
);
