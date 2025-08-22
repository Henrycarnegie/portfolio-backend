import { ProjectModel } from "../models/ProjectModels.js";

export const getAllProjects = async (req, res) => {
   try {
      const Project = await ProjectModel();
      const projects = await Project.findAll();
      res.json(projects);
   } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
   }
};

export const getProjectsById = async (req, res) => {
   try {
      const Project = await ProjectModel();
      const project = await Project.findByPk(req.params.id);
      res.json(project);
   } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
   }
};

export const createProject = async (req, res) => {
   try {
      const Project = await ProjectModel();
      await Project.create(req.body);
      res.status(201).json({ message: "Project berhasil ditambahkan" });
   } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
   }
};

export const updateProject = async (req, res) => {
   try {
      const Project = await ProjectModel();
      await Project.update(req.body, { where: { id: req.params.id } });
      res.status(200).json({ message: "Project berhasil diupdate" });
   } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
   }
};

export const deleteProject = async (req, res) => {
   try {
      const Project = await ProjectModel();
      await Project.destroy({ where: { id: req.params.id } });
      res.status(200).json({ message: "Project berhasil dihapus" });
   } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
   }
};
