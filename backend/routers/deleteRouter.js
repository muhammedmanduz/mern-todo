const express = require("express");
const router = express.Router();
const { join } = require("path");
const { sendMessage } = require("../help/help.js");
const Text = require("../schema/text.js");

router.post("/", (req, res) => {
  try {
    if (!req.body) {
      return sendMessage(res, false, "req.body alanında bir hata  oluştu!");
    }
    const { id } = req.body;
    if (!id) {
      return sendMessage(res, false, "Veri İletilemedi!");
    }
    if (id.length !== 24) {
      return sendMessage(res, false, "Veri bulunamadı!");
    }

    Text.findByIdAndDelete(id)
      .then((e) => {
        if (!e) {
          return sendMessage(res, false, "Veri bulunamadı!");
        }
        return sendMessage(res, true, "Veri başarıyla silindi.");
      })
      .catch((error) => {
        console.error(error);
        sendMessage(res, false, "Beklenilmeyen bir hata oluştu.");
      });
  } catch (error) {
    console.error("Error in POST /: ", error);
    sendMessage(res, false, "Beklenilmeyen bir hata oluştu.");
  }
});

module.exports = router;
