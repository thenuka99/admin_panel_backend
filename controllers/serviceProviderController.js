const mongoose = require("mongoose");
const serviceProvider = mongoose.model("ServiceProvider"); //Import models
const ResponseService = require("../utils/ResponsesService"); //import  Response service


// Create
exports.create = async (req, res) => {
  new serviceProvider(req.body).save((err, doc) => {
    ResponseService.generalPayloadResponse(err, doc, res);
  });
};

//get all
exports.getAll = (req, res) => {
  serviceProvider.find((err, doc) => {
      ResponseService.generalPayloadResponse(err, doc, res);
    })
    .sort({ addedOn: -1 })
    .populate( "serviceProviderID","name userType email nic dob gender province city ")
    .populate("categoryID","name");
};

// Update
exports.update = async (req, res) => {
  serviceProvider.findByIdAndUpdate(req.body.id, req.body, (err, doc) => {
    ResponseService.generalPayloadResponse(err, doc, res);
  })

  .populate( "serviceProviderID","name userType email nic dob gender province city ");
};

// Get by id
exports.getById = (async (req, res) => {
  serviceProvider.findById(req.params.id, (err, doc) => {
    ResponseService.generalPayloadResponse(err, doc, res);
  })
  .populate( "serviceProviderID","name userType email nic dob gender province city ");
});

// Delete
exports.delete = (async (req, res) => {
  serviceProvider.findByIdAndRemove(req.params.id, (err, doc) => {
    ResponseService.generalResponse(err,res,"Service provider removed successfully");
  });
});
