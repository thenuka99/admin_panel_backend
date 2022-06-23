const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  nic: {
    type: String,
  },
  bio: {
    type: String,
  },
  image: {
    type: String,
  },
  dob: {
    type: Date,
  },
  gender: {
    type: Boolean,
  },
  province: {
    type: String,
  },
  city: {
    type: String,
  },
});

mongoose.model("User", userSchema);
