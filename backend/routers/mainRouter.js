const express = require("express");
const router = express.Router();
const { join } = require("path");
const { sendMessage } = require("../help/help.js");
const Text = require("../schema/text.js");

router.post("/", async (req, res) => {
  try {
    const text = await Text.find().exec();

    return sendMessage(res, true, text);
  } catch (error) {
    console.error("Error in POST /: ", error);
    sendMessage(res, false, "Beklenilmeyen bir hata oluştu.");
  }
});

module.exports = router;
