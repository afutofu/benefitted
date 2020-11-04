const express = require("express");
const router = express.Router({ mergeParams: true });

// @route   POST /api/auth
// @desc    Authenticate admin
// @access  Public
router.post("/", (req, res) => {
  const { password } = req.body;

  console.log(password, process.env.ADMIN_PASSWORD);

  if (!password) {
    return res.status(400).json({ msg: "Please enter field" });
  }

  if (password !== process.env.ADMIN_PASSWORD) {
    return res.status(400).json({ msg: "Invalid credentials" });
  }

  return res.send();
});

module.exports = router;
