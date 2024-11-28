const express = require("express");
const Sign = require("../models/Sign");

const router = express.Router();

// Add a new sign
router.post("/", async (req, res) => {
  try {
    const { gestureData, meaning, language } = req.body;
    const newSign = new Sign({ gestureData, meaning, language });
    await newSign.save();
    res.status(201).json(newSign);
  } catch (err) {
    res.status(400).json({ error: "Error adding the sign to SignSense database." });
  }
});

// Get all signs
router.get("/", async (req, res) => {
  try {
    const signs = await Sign.find();
    res.status(200).json(signs);
  } catch (err) {
    res.status(500).json({ error: "Error fetching signs from SignSense database." });
  }
});

// Get a specific sign by ID
router.get("/:id", async (req, res) => {
  try {
    const sign = await Sign.findById(req.params.id);
    if (!sign) return res.status(404).json({ error: "Sign not found in SignSense database." });
    res.status(200).json(sign);
  } catch (err) {
    res.status(500).json({ error: "Error fetching the sign from SignSense database." });
  }
});

// Update a sign
router.put("/:id", async (req, res) => {
  try {
    const updatedSign = await Sign.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedSign) return res.status(404).json({ error: "Sign not found in SignSense database." });
    res.status(200).json(updatedSign);
  } catch (err) {
    res.status(400).json({ error: "Error updating the sign in SignSense database." });
  }
});

// Delete a sign
router.delete("/:id", async (req, res) => {
  try {
    const deletedSign = await Sign.findByIdAndDelete(req.params.id);
    if (!deletedSign) return res.status(404).json({ error: "Sign not found in SignSense database." });
    res.status(200).json({ message: "Sign deleted successfully from SignSense database." });
  } catch (err) {
    res.status(500).json({ error: "Error deleting the sign from SignSense database." });
  }
});

module.exports = router;
