const express = require("express");
const router = express.Router();


//Imports
ServiceProviderController = require('../controllers/serviceProviderController');

// Create
router.post("/", async (req, res) => ServiceProviderController.create(req,res));

//get all
router.get("/", (req, res) => ServiceProviderController.getAll(req,res));

// Update
router.put("/", async (req, res) => ServiceProviderController.update(req,res));

// Get by id
router.get("/:id", (req, res) =>ServiceProviderController.getById(req,res));

// Delete
router.delete("/:id", (req, res) => ServiceProviderController.delete(req,res));

module.exports = router;
