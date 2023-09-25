const mongoose = require("mongoose");

const SignUpSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    upi: {
      type: String,
    },
    mobile: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    refaral: {
      type: String,
    },
    yourstate: {
      type: String,
      required: true,
    },
    district: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", SignUpSchema);
