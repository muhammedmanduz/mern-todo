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
    const { text } = req.body;
    if (!text) {
      return sendMessage(res, false, "Veri İletilemedi!");
    }
    const newText = new Text({
      text,
      createdAt: Date.now(),
    });
    newText.save().then((e) => {
      console.log(newText);
      return sendMessage(res, true, e);
    });
  } catch (error) {
    console.error(error);
    return sendMessage(res, false, "Bir hata oluştu.");
  }
});

module.exports = router;
