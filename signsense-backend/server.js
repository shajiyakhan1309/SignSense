const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const signRoutes = require("./routes/signRoutes");

const app = express();

// Middleware to parse JSON data
app.use(bodyParser.json());

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/signsense", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log("MongoDB connection error: ", err));

// Use the routes
app.use("/api/signs", signRoutes);

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
