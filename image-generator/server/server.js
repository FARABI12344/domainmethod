const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, "../public")));

// Route to serve the HTML page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Route to serve the generated images
app.get("/generated_image.jpg", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/generated/generated_image.jpg"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

