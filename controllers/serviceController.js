const mongoose = require('mongoose');
//Imports
const service  = mongoose.model("Service");//service 
const ResponseService = require('../utils/ResponsesService'); // Response service

// Create
exports.create=( async (req, res) => {
    new service(req.body).save((err, doc) => {
        ResponseService.generalPayloadResponse(err, doc, res);
    });
});

//get all
exports.getAll=(async (req, res) => {
    service.find((err, doc) => {
        ResponseService.generalPayloadResponse(err, doc, res);
    })
        .sort({ addedOn: -1 })
        .populate('serviceProvider','serviceProviderID categoryID')
        .populate('serviceCategory', 'name')

});

// Update
exports.update=( async (req, res) => {
    service .findByIdAndUpdate(req.body.id, req.body, (err, doc) => {
        ResponseService.generalPayloadResponse(err, doc, res, "Updated");
    });
});

// Get by id
exports.getById=( (req, res) => {
    service .findById(req.params.id, (err, doc) => {
        ResponseService.generalPayloadResponse(err, doc, res);
    });
});

// Delete
exports.delete=(async (req, res) => {
    service .findByIdAndRemove(req.params.id, (err, doc) => {
        ResponseService.generalResponse(err, res, "task removed successfully");
    });
});

