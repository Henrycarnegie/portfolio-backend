import express from "express";
import cors from "cors";
import adminRoute from "./routes/adminRoute.js";

const app = express();

app.use(cors({
  origin: [
    process.env.FRONTEND_URL || "http://localhost:3000",
    "https://portfolio-henry-carnegie.vercel.app/"
  ]
}));

app.use(express.json());

// Route API
app.use("/api/admin", adminRoute);

export default app;
