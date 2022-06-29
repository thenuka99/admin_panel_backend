const mongoose = require("mongoose");
const reviews = mongoose.model("Reviews");
const ResponseService = require("../utils/ResponsesService"); 

// Create
exports.create=(async (req, res) => {
  new reviews(req.body).save((err, doc) => {
    ResponseService.generalPayloadResponse(err, doc, res);
  });
});

//get all
exports.getAll=(async(req, res) => {
  reviews.find((err, doc) => {
      ResponseService.generalPayloadResponse(err, doc, res);
    })
    .sort({ addedOn: -1 })
    .populate("addedBy", "name");
});

// Update
exports.update=(async (req, res) => {
  reviews.findByIdAndUpdate(req.body.id, req.body, (err, doc) => {
    ResponseService.generalPayloadResponse(err, doc, res);
  });
});

// Get by id
exports.getById=(async(req, res) => {
  reviews.findById(req.params.id, (err, doc) => {
    ResponseService.generalPayloadResponse(err, doc, res);
  });
});

// Delete
exports.delete=(async(req, res) => {
  reviews.findByIdAndRemove(req.params.id, (err, doc) => {
    ResponseService.generalResponse(err, res, "Review removed successfully");
  });
});

//get by sp id
exports.getBySp=(async(req, res) => {
  reviews.find({ servicer:req.params.id},(err, doc) => {
      ResponseService.generalPayloadResponse(err, doc, res);
    })
    .sort({ addedOn: -1 })
    .populate("addedBy", "name");
});