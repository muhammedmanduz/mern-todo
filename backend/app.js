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

//yönlendirme dosyalarının dahil edildiği dizin
const mainRouter = require("./routers/mainRouter.js");

//yönlendirme dosyalarının kullanıldığı alan
app.use("/", mainRouter);
app.use("/add", require("./routers/addRouter.js"));
app.use("/delete", require("./routers/deleteRouter.js"));
app.use("/edit", require("./routers/editRouter.js"));

//portu dinleme ve sunucu başlatma
app.listen(PORT, () => {
  console.log(`Server is running on ${BACKEND_URL}`);
});
