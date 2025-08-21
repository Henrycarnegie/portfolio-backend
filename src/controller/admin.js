const data = [
   {
      id: "1",
      projectName: "Game Development",
      category: "web-base-game",
      schemaProject: "Capstone",
   },
   {
      id: "2",
      projectName: "Game Development",
      category: "game",
      schemaProject: "Capstone",
   },
   {
      id: "3",
      projectName: "Thesis",
      category: "website",
      schemaProject: "Personal",
   },
];

// Post - Post projects
const postProjects = (req, res) => {
   console.log(req.body);

   res.json({
      message: "Berhasil login admin",
      data: req.body,
   });
};

// Get -  Get all projects
const getAllProjects = (req, res) => {
   res.json(data);
};

// Patch - Update by id projects
const updateProject = (req, res) => {
   const idParams = req.params.id;
   const { projectName, category, schemaProject } = req.body;

   try {
      const checkId = data.findIndex((project) => project.id === idParams);

      console.log(checkId, req.body);

      if (checkId !== -1) {
         data[checkId] = {
            ...data[checkId],
            projectName: projectName || data[checkId].projectName,
            category: category || data[checkId].category,
            schemaProject: schemaProject || data[checkId].schemaProject,
         };
         res.json({
            message: "Berhasil update data",
            data: data[checkId],
         });
      }
   } catch (error) {
      console.log(error);
      res.status(404).json({
         message: "Data tidak ditemukan",
      });
   }
};

// Delete - Delete by id project
const deleteProject = (req, res) => {
   const idParams = req.params.id;
   const { projectName, category, schemaProject } = req.body;

   try {
      const checkId = data.findIndex((project) => project.id === idParams);

      if (checkId !== -1) {
         data[checkId] = {
            ...data[checkId],
            projectName: projectName || data[checkId].projectName,
            category: category || data[checkId].category,
            schemaProject: schemaProject || data[checkId].schemaProject,
         };
         res.json({
            message: "Berhasil delete data",
            data: data[checkId],
         });
      }
   } catch (error) {
      console.log(error);
      res.status(404).json({
         message: "Data tidak ditemukan",
      });
   }
};

module.exports = { postProjects, getAllProjects, updateProject, deleteProject };
