const express = require("express");
const router = express.Router({ mergeParams: true });
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");

// @route   POST /api/auth
// @desc    Authenticate admin
// @access  Public
router.post("/", (req, res) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ msg: "Please enter field" });
  }

  // Validate password
  if (password !== process.env.ADMIN_PASSWORD) {
    return res.status(400).json({ msg: "Invalid credentials" });
  }

  jwt.sign({}, process.env.JWT_KEY, { expiresIn: 180 }, (err, token) => {
    if (err) throw err;

    res.json({
      token,
    });
  });
});

// @route   GET /api/auth/user
// @desc    Get user data
// @access  Private
router.get("/admin", auth, (req, res) => {
  jwt.sign({}, process.env.JWT_KEY, { expiresIn: 180 }, (err, token) => {
    if (err) throw err;

    res.json({
      token,
    });
  });
});

module.exports = router;
