const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

//Imports
const user = mongoose.model("User");
const ResponseService = require("../utils/ResponsesService"); // Response service

//get all
router.get("/", (req, res) => {
  user.find((err, doc) => {
      ResponseService.generalPayloadResponse(err, doc, res);
    })
    .sort({ addedOn: -1 });
});

//get all clients
router.get("/clients", (req, res) => {
  user.find({ userType : "client"},(err, doc) => {
      ResponseService.generalPayloadResponse(err, doc, res);
    })
    .sort({ addedOn: -1 });
});

// Update
router.put("/:id", async (req, res) => {
  user.findOneAndUpdate(req.body.id, req.body, (err, doc) => {
    ResponseService.generalPayloadResponse(err, doc, res, "User updated");
  });
});

// Get by id
router.get("/:id", (req, res) => {
  user.findById(req.params.id, (err, doc) => {
    ResponseService.generalPayloadResponse(err, doc, res);
  });
});

// Delete
router.delete("/:id", (req, res) => {
  user.findByIdAndRemove(req.body.id, (err, doc) => {
    ResponseService.generalResponse(err, res, "User removed");
  });
});

module.exports = router;
