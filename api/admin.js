import express from "express";
import cors from "cors";
import adminRoute from "../routes/adminRoute.js";

const app = express();

// middleware
app.use(cors({ origin: process.env.FRONTEND_URL || "http://localhost:3000" }));
app.use(express.json());

// routes
app.use("/api", adminRoute);

export default app;
