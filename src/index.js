import express from "express";
import cors from "cors";
import adminRoute from "./routes/adminRoute.js";

const app = express();

app.use(cors({ origin: process.env.FRONTEND_URL || "http://localhost:3001/*" }));
app.use(express.json());

app.use("/admin", adminRoute);

export default app;
