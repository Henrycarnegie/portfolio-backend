const express = require("express");
const adminRoutes = require("./routes/admin");
const isAdminRequest = require("./middleware/Authentication");

const app = express();

const port = 3001;

app.use(express.json()); 

// Pengecekan middleware
app.use(isAdminRequest);

// Use semua method yang ada pada routes/users.js
app.use("/admin", adminRoutes);

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`);
});
