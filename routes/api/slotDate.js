const express = require("express");
const router = express.Router({ mergeParams: true });

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
router.post("/", (req, res) => {
  const { day } = req.body;

  const newSlotDate = new SlotDate({ day });

  newSlotDate.save((err) => {
    if (err)
      return res.status(500).json({ msg: "Could not create new slot date" });

    res.send(newSlotDate);
  });
});

module.exports = router;
