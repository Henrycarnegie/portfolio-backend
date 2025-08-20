const isAdminValidation = (req, res, next) => {
   const { text } = req.body;
   if (text === "hai") {
      next();
   } else {
      return res.status(403).json({
         error: "Forbidden. Hanya boleh kalau text = 'hai'",
      });
   }
};

module.exports = isAdminValidation;
