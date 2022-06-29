const express = require("express");
const router = express.Router();

//Imports
appointmentController = require('../controllers/appointmentController');

// Create
router.post("/", async (req, res) =>  appointmentController.create(req,res));

//get all
router.get("/", (req, res) => appointmentController.getAll(req,res));

//get all approve appointments
router.get("/approve", (req, res) => appointmentController.getAllAppoved(req,res));

//get all reject appointments
router.get("/reject", (req, res) => appointmentController.getAllRejected(req,res));

// Update
router.put("/", async (req, res) => appointmentController.update(req,res));

// Get by id
router.get("/:id", (req, res) => appointmentController.getById(req,res));

// Delete
router.delete("/:id", (req, res) => appointmentController.delete(req,res));

//get by servicer
router.get("/servicer/:id", (req, res) => appointmentController.getByServicer(req,res));

//get notification
router.get("/notification/:id", (req, res) => appointmentController.getNotification(req,res));

module.exports = router;
