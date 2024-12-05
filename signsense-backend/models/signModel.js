const mongoose = require("mongoose");

const signSchema = new mongoose.Schema({
  gestureData: {
    type: String,
    required: true, // Example: Sensor data or encoded gesture
  },
  meaning: {
    type: String,
    required: true, // Meaning of the sign
  },
  language: {
    type: String,
    default: "English", 
  },
});

module.exports = mongoose.model("Sign", signSchema);
