const mongoose = require("mongoose");

//mongoDB compass bağlantısı
const DB_URL = process.env.DB_URL || "mongodb://127.0.0.1:27017";

const conn = () => {
  mongoose
    .connect(DB_URL, {
      dbName: "todo",
    })
    .then(() => {
      console.log("MongoDB bağlantısı başarılı");
    })
    .catch((err) => {
      console.error("MongoDB bağlantısı başarısız", err);
    });
};

module.exports = conn;
