import express from "express";
import cors from "cors";
import adminRoute from "./routes/adminRoute.js";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());


// Use semua method yang ada pada routes/users.js
app.use(adminRoute);

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`);
});
