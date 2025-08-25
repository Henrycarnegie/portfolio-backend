import express from "express";
import adminRoute from "./routes/adminRoute.js";

const app = express();

// Middleware untuk CORS (bisa untuk dev & prod)
app.use((req, res, next) => {
  // Allow FE URLs
  const allowedOrigins = [
    "http://localhost:3000",
    "https://portfolio-henry-carnegie.vercel.app",
    "https://www.portfolio-henry-carnegie.vercel.app"
  ];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", "true"); // kalau pakai cookies
  // Handle preflight request
  if (req.method === "OPTIONS") return res.sendStatus(204);
  next();
});

app.use(express.json());
app.use("/api/admin", adminRoute);

export default app;
