// api/index.js
import serverless from "serverless-http";
import app from "../src/index.js"; // import app dari src/index.js

export const handler = serverless(app);
