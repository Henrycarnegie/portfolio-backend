const express = require("express");

const adminController = require("../controller/admin");

const router = express.Router();

// Get all Project
router.get("/", adminController.getAllProjects);

// Create Project
router.post("/post", adminController.postProjects);

// Update Project
router.patch("/update/:id", adminController.updateProject);

// Delete Project
router.delete("/delete/:id", adminController.deleteProject)

module.exports = router;
