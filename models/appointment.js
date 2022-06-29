const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Service",
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  serviceProvider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ServiceProvider",
  },
  serviceCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ServiceCategory",
  },
  address: {
    type: String,
  },
  date: {
    type: Date,
  },

  time:{
    type:Date,

  },
  price: {
    type: Number,
    required: true,
  },
  
  // accept or decline
  serviceAcceptedStatus: { 
    type: Boolean , 
    default:false
  },
  // notification
    serviceisAcceptedStatus: { 
      type: Boolean , 
      default:false
  },

  clientAcceptedStatus:{
    type: Boolean , 
    default:false,

  },
  paymentStatus:{
    type: Boolean , 
    default:false,
    
  }
});

mongoose.model("Appointment", appointmentSchema);
