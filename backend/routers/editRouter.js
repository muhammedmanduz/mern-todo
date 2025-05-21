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
    const { text, id } = req.body;
    if ((!text, !id)) {
      return sendMessage(res, false, "Veri İletilemedi!");
    }
    if (id.length !== 24) {
      return sendMessage(res, false, "Veri bulunamadı!");
    }

    Text.findByIdAndUpdate(id, { text }, { new: true })
      .then((e) => {
        return sendMessage(res, true, e);
      })
      .catch((error) => {
        console.error(error);
        sendMessage(res, false, "Bir hata oluştu.");
      });
  } catch (error) {
    console.error(error);
    return sendMessage(res, false, "Bir hata oluştu.");
  }
});

module.exports = router;
