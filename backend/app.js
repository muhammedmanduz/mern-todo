//proje için gerekli paketleri
const express = require("express");
const { join } = require("path");
const dbs = require("./dbs.js");

//veritabanı bağlantısı
dbs();

//başlangıç ayarları
const app = express();

//değişkenler ve dizinler
const PORT = process.env.PORT || 5000;
const BACKEND_URL = process.env.BACKEND_URL || `http://127.0.0.1:${PORT}`;

//middleware
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on ${BACKEND_URL}`);
});
