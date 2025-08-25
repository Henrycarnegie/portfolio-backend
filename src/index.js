import express from "express";
import cors from "cors";
import adminRoute from "./routes/adminRoute.js";

const app = express();

const allowedOrigins = [
  process.env.FRONTEND_URL || "http://localhost:3000",
  "https://portfolio-henry-carnegie.vercel.app"
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true // kalau butuh cookies
}));

app.use(express.json());
app.use("/api/admin", adminRoute);

export default app;
