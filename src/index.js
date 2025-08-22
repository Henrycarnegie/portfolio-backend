import express from "express";
import cors from "cors";
import adminRoute from "./routes/adminRoute.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors({ origin: process.env.FRONTEND_URL || "http://localhost:3000" }));
app.use(express.json());

app.use(adminRoute);

// if (process.env.NODE_ENV !== "production") {
//   const port = process.env.PORT || 3001;
//   app.listen(port, () => {
//     console.log(`Server running locally on http://localhost:${port}`);
//   });
// }

export default app;
