import express from "express";
import cors from "cors";
import adminRoute from "./routes/adminRoute.js";

const app = express();

app.use(cors({ origin: process.env.FRONTEND_URL || "*" }));
app.use(express.json());

// route utama
app.use("/admin", adminRoute);

// export app (bukan listen)
export default app;
