const express = require("express");
const path = require("path");
const cors = require("cors");
require("dotenv/config");

const PORT = process.env.PORT || 5000;

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API ROUTES
app.post("/api/auth", (req, res) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ msg: "Please enter field" });
  }

  if (req.body !== process.env.ADMIN_PASSWORD) {
    return res.status(400).json({ msg: "Invalid credentials" });
  }

  return res.send();
});

// SERVE STATIC ASSETS IF IN PRODUCTION
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (_req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log("Server now listening on port 5000");
});
