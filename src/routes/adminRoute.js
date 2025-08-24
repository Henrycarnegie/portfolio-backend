import express from "express";
import {
   getAllProjects,
   getProjectsById,
   createProject,
   updateProject,
   deleteProject,
} from "../controller/ProjectController.js";

const router = express.Router();

router.get("/", getAllProjects);
router.post("/", createProject);
router.get("/:id", getProjectsById);
router.patch("/:id", updateProject);
router.delete("/:id", deleteProject);

export default router;
