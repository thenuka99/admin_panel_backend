const mongoose = require("mongoose");

const serviceCategorySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  Image:{
    type:String,
  }
});

mongoose.model("ServiceCategory",serviceCategorySchema);
