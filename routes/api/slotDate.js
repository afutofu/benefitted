const express = require("express");
const router = express.Router({ mergeParams: true });
const auth = require("../../middleware/auth");

const SlotDate = require("../../models/SlotDate");

// @route   GET /api/slotDate/:year/:month
// @desc    Get all slot dates in year and month
// @access  Private
router.get("/:year/:month", (req, res) => {
  const { year, month } = req.params;

  SlotDate.find(
    {
      year,
      month,
    },
    (err, foundSlotDates) => {
      if (err)
        return res.status(500).json({ msg: "Error retreiving slot dates" });

      res.send(foundSlotDates);
    }
  );
});

// @route   POST /api/slotDate
// @desc    Authenticate admin
// @access  Private
router.post("/", auth, (req, res) => {
  const { year, month, day } = req.body;

  SlotDate.findOne({ year, month, day }, (err, foundSlotDate) => {
    if (err) return res.status(500).json({ msg: "Error finding slot date" });

    if (foundSlotDate)
      return res
        .status(400)
        .json({ msg: "There is already a slot for that date" });

    const newSlotDate = new SlotDate({ day });

    newSlotDate.save((err) => {
      if (err)
        return res.status(500).json({ msg: "Could not create new slot date" });

      res.send(newSlotDate);
    });
  });
});

// @route   POST /api/slotDate/:year/:month/:day
// @desc    Authenticate admin
// @access  Private
router.delete("/:year/:month/:day", auth, (req, res) => {
  const { year, month, day } = req.params;

  SlotDate.deleteOne({ year, month, day }, (err, deletedSlotDate) => {
    if (err)
      return res.status(500).json({ msg: "Error in deleting slot date" });

    res.send(deletedSlotDate);
  });
});

module.exports = router;
