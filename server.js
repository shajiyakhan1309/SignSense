const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const signRoutes = require("./routes/signRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database Connection
mongoose
  .connect("mongodb://localhost:27017/signsenseDB", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to SignSense MongoDB"))
  .catch((err) => console.error("Database connection error:", err));

// Routes
app.use("/api/signs", signRoutes);

// Start Server
const PORT = 3000;
app.listen(PORT, () => console.log(`SignSense backend running on http://localhost:${PORT}`));
