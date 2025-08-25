import express from "express";
import {
   getAllProjects,
   getProjectsById,
   createProject,
   updateProject,
   deleteProject,
} from "../controller/ProjectController.js";

const router = express.Router();

router.get("/projects", getAllProjects);
router.get("/projects/:id", getProjectsById);

router.post("/projects", createProject);

router.patch("/projects/:id", updateProject);

router.delete("/projects/:id", deleteProject);

export default router;
