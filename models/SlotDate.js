const mongoose = require("mongoose");

let today = new Date();

const SlotDateSchema = mongoose.Schema({
  day: {
    type: Number,
    required: true,
  },
  month: {
    type: Number,
    default: today.getMonth() + 1,
  },
  year: {
    type: Number,
    default: today.getFullYear(),
  },
});

module.exports = mongoose.model("slotDate", SlotDateSchema);
