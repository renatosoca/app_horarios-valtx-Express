// src/app.ts
import express, { Response, Request, urlencoded, json } from "express";
import swaggerUi from "swagger-ui-express";
import { userRouter } from "./users/infrastructure";

export const app = express();

app.use("/docs", swaggerUi.serve, async (_req: Request, res: Response) => {
  const html = swaggerUi.generateHTML(await import("../build/swagger.json"));
  res.setHeader("Content-Type", "text/html");
  return res.send(html);
});

app.use(urlencoded({ extended: true }));
app.use(json());

app.use('/api/Auth', userRouter)