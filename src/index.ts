import "dotenv/config";
import express, { Express } from "express";

import errorHandler from "./middlewares/errorHandler";

import bBoxRouter from "./routes/bBoxRoute";

const app: Express = express();
app.use(express.json());

app.use("/api/bbox", bBoxRouter);

app.use(errorHandler);

const port: string = process.env.PORT || "5050";

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
