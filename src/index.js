import express from "express";
import cors from "cors";
import adminRoute from "./routes/adminRoute.js";

const app = express();

const allowedOrigins = [
  "http://localhost:3000",
  "https://portfolio-henry-carnegie.vercel.app",
  "https://www.portfolio-henry-carnegie.vercel.app"
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    const isAllowed = allowedOrigins.some(o => origin.startsWith(o));
    if (isAllowed) return callback(null, true);
    callback(new Error(`CORS error: ${origin} not allowed`));
  },
  credentials: true
}));

app.use(express.json());
app.use("/api/admin", adminRoute);

export default app;
