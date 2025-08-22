import express from "express";
import cors from "cors";
const adminRoutes = require("./routes/admin");

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT;

// Use semua method yang ada pada routes/users.js
app.use("/admin", adminRoutes);

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`);
});
