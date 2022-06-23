const express = require("express");
const router = express.Router();

ServiceController =require('../controllers/reviewsController')

// Create
router.post("/", async (req, res) => ServiceController.create(req,res));

//get all
router.get('/', (req, res) =>  ServiceController.getAll(req,res));

// Update
router.put("/", async (req, res) => ServiceController.update(req,res));

// Get by id
router.get('/:id', (req, res) => ServiceController.getById(req,res));

// Delete
router.delete('/:id', (req, res) =>  ServiceController.delete(req,res));

module.exports = router;
