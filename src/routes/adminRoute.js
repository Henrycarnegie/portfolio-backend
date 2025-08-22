import express from "express";
import {
   getAllProjects,
   getProjectsById,
   createProject,
   updateProject,
   deleteProject,
} from "../controller/ProjectController.js";

const router = express.Router();

// Get all Project
router.get("/admin", getAllProjects);
router.post("/admin", createProject);
router.get("/admin/:id", getProjectsById);
router.patch("/admin/:id", updateProject);
router.delete("/admin/:id", deleteProject);

export default router;
