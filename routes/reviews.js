const express = require("express");
const router = express.Router();

//Imports
ReviewController = require('../controllers/reviewsController');

// Create
router.post("/", async (req, res) => ReviewController.create(req,res));

//get all
router.get("/", (req, res) => ReviewController.getAll(req,res));

//get by servicer
router.get("/user/:id", (req, res) => ReviewController.getBySp(req,res));

// Update
router.put("/", async (req, res) => ReviewController.update(req,res));

// Get by id
router.get("/:id", (req, res) => ReviewController.getById(req,res));

// Delete
router.delete("/:id", (req, res) => ReviewController.delete(req,res));

module.exports = router;
