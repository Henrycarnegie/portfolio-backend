import Project from "../models/ProjectModels.js";

export const getAllProjects = async (req, res) => {
   try {
      const response = await Project.findAll();
      res.status(200).json(response);
   } catch (error) {
      console.log(error.message);
   }
};

export const getProjectsById = async (req, res) => {
   try {
      const response = await Project.findOne({
         where: {
            id: req.params.id,
         },
      });
      res.status(200).json(response);
   } catch (error) {
      console.log(error.message);
   }
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
