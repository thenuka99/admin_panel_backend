const mongoose = require("mongoose");


const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 255,
  },
  serviceProvider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ServiceProvider",
  },
  serviceCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ServiceCategory",
  },
  fee: {
    type: Number,
    required: true,
    min: 1000,
  },
});

mongoose.model("Service", serviceSchema);
