const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());

const PORT = 3000;

// Read movies.json and send data as response
app.get("/movies", (req, res) => {
  fs.readFile("movies.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("Error reading movies.json");
    }
    res.json(JSON.parse(data)); // Send JSON data
  });
});

app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://127.0.0.1:${PORT}`);
});
