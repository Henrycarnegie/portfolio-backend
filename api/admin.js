import serverless from "serverless-http";
import express from "express";
import cors from "cors";
import adminRoute from "../src/routes/adminRoute.js";

const app = express();

app.use(cors({ origin: process.env.FRONTEND_URL || "http://localhost:3000" }));
app.use(express.json());

app.use("/admin", adminRoute);  

export const handler = serverless(app);
