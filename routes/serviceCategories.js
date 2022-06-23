const express = require("express");
const router = express.Router();

//imports
 ServiceCategoryController = require("../controllers/serviceCategoriesController")

// Create
router.post("/", async (req, res) => ServiceCategoryController.create(req,res));

//get all
router.get("/", (req, res) => ServiceCategoryController.getAll(req,res));

// Update
router.put("/", async (req, res) => ServiceCategoryController.update(req,res));

// Get by id
router.get("/:id", (req, res) => ServiceCategoryController.getById(req,res));

// Delete
router.delete("/:id", (req, res) => ServiceCategoryController.delete(req,res));

module.exports = router;
