import Project from "../models/ProjectModels.js";

import { ProjectModel } from "../models/ProjectModels.js";

export const getAllProjects = async (req, res) => {
   const Project = await ProjectModel();
   const projects = await Project.findAll();
   res.json(projects);
};

export const getProjectsById = async (req, res) => {
   const Project = await ProjectModel();
   const project = await Project.findByPk(req.params.id);
   res.json(project);
};

export const createProject = async (req, res) => {
   try {
      await Project.create(req.body);
      res.status(201).json({ message: "Project berhasil ditambahkan" });
   } catch (error) {
      console.log(error.message);
   }
};

export const updateProject = async (req, res) => {
   try {
      await Project.update(req.body, {
         where: {
            id: req.params.id,
         },
      });
      res.status(200).json({ message: "Project berhasil diupdate" });
   } catch (error) {
      console.log(error.message);
   }
};

export const deleteProject = async (req, res) => {
   try {
      await Project.destroy({
         where: {
            id: req.params.id,
         },
      });
      res.status(200).json({ message: "Project berhasil dihapus" });
   } catch (error) {
      console.log(error.message);
   }
};
