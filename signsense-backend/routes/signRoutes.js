const express = require("express");
const router = express.Router();
const Sign = require("../models/signModel");


router.post("/", async (req, res) => {
  try {
    const { gestureData, meaning, language } = req.body;

    // Create a new sign entry
    const newSign = new Sign({
      gestureData,
      meaning,
      language,
    });

    // Save to the database
    const savedSign = await newSign.save();
    res.status(201).json(savedSign);
  } catch (err) {
    res.status(500).json({ error: "Failed to save sign: " + err.message });
  }
});

// GET: Fetch All Signs
router.get("/", async (req, res) => {
  try {
    const signs = await Sign.find();
    res.status(200).json(signs);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch signs: " + err.message });
  }
});

module.exports = router;
