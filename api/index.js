// api/index.js
import serverless from "serverless-http";
import app from "../src/index.js"; // import Express app

export const handler = serverless(app);
